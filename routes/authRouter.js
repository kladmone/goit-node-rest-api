import express from "express";

import validateBody from "../decorators/validateBody.js";

import authController from "../controllers/authController.js";

import { userSignupSchema, userSigninSchema } from "../schemas/userSchemas.js";

const authRouter = express.Router();

authRouter.post(
  "/users/register",
  validateBody(userSignupSchema),
  authController.signup
);

export default authRouter;
