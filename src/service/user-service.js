import bcrypt from "bcrypt";
import { prismaClient } from "./../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../validation/validation.js";
import {
  loginUserValidation,
  registerUserValidation,
} from "../validation/user-validation.js";
import { v4 } from "uuid";
import { logger } from "../application/logging.js";

const register = async (req) => {
  const user = validate(registerUserValidation, req);

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (countUser == 1) {
    throw new ResponseError(400, "Username already exists");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

const login = async (req) => {
  const loginRequest = validate(loginUserValidation, req);

  const user = await prismaClient.user.findUnique({
    where: {
      username: loginRequest.username,
    },
    select: {
      username: true,
      password: true,
    },
  });
  if (!user) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const isPassValid = await bcrypt.compare(
    loginRequest.password,
    user.password
  );

  logger.info(user);
  logger.info(isPassValid);

  if (!isPassValid) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const token = v4().toString();

  return await prismaClient.user.update({
    data: {
      token: token,
    },
    where: {
      username: user.username,
    },
    select: {
      token: true,
    },
  });
};

export default {
  register,
  login,
};
