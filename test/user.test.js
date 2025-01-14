import supertest from "supertest";
import { web } from "../src/application/web.js";
import { logger } from "../src/application/logging.js";
import { createTestUser, removeTestUser } from "./test.util.js";

describe("POST /api/users", () => {
  afterEach(async () => {
    await removeTestUser();
  });

  it("should can register new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
    });
    logger.info(result);
    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.password).toBeUndefined();
  });

  it("should reject if request is invalid", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      name: "",
    });

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject id username is already exist", async () => {
    let result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
    });

    logger.info(result);

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("test");
    expect(result.body.data.password).toBeUndefined();

    result = await supertest(web).post("/api/users").send({
      username: "test",
      password: "rahasia",
      name: "test",
    });

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});

describe("POST /api/users/login", () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it("should can login ", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "rahasia",
    });
    logger.info(result);

    expect(result.status).toBe(200);
    expect(result.body.data.token).toBeDefined();
    expect(result.body.data.token).not.toBe("test");
  });

  it("should reject login invalid if invalid request", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "",
      password: "",
    });
    logger.info(result);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject login if invalid password", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "test",
      password: "salah",
    });
    logger.info(result);

    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject login if invalid username", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "salah",
      password: "rahasia",
    });
    logger.info(result);

    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });
});
