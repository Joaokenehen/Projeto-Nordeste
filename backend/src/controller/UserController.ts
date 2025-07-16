import { Request, Response } from "express";
import UserModel from "../model/UserModel";

export const getAll = async (req: Request, res: Response) => {
  const users = await UserModel.findAll();
  res.send(users);
};
