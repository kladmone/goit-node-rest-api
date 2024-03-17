import User from "../models/User.js";
import bcrypt from "bcrypt";
export const findUser = (filter) => User.findOne(filter);
export const signup = async (data) => {
  const hashPassword = await bcrypt.hash(data.password, 10);
  User.create({ ...data, password: hashPassword });
};
