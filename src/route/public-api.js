import express from "express";
import userConroller from "./../controller/user-controller.js";
const publicRouter = express.Router();

publicRouter.post("/api/users", userConroller.register);
publicRouter.post("/api/users/login", userConroller.login);

export { publicRouter };
