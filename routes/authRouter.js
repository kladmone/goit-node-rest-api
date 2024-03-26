import express from "express";

import validateBody from "../decorators/validateBody.js";

import authController from "../controllers/authController.js";

import { userSignupSchema, userSigninSchema } from "../schemas/userSchemas.js";

import authenticate from "../middlewares/authenticate.js";

import upload from "../middlewares/upload.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(userSignupSchema),
  authController.signup
);

authRouter.post(
  "/login",
  validateBody(userSigninSchema),
  authController.signin
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.signout);

authRouter.patch(
  "/avatars",
  upload.single("avatar"),
  authenticate,
  authController.changeAvatar
);

export default authRouter;
