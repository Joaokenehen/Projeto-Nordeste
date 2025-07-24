import { Request, Response } from "express";
import UserModel from "../model/UserModel";

export const getAll = async (req: Request, res: Response) => {
  const users = await UserModel.findAll();
  res.send(users);
};

export const getUserById = async (
  req: Request<{ id: number }>,
  res: Response
) => {
  const users = await UserModel.findByPk(req.params.id);
  return res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = {
      name: req.body.name,
      password: req.body.password,
      cpf: req.body.password,
      email: req.body.email,
      birth_date: req.body.birth_date,
    };

    if (userData.name.length < 3) {
      return res.status(400).json({
        message: "User need to have more than 3 characters",
      });
    }
    const user = await UserModel.create(userData);
    res.status(201).json(user);
    message: "User createad";
  } catch (error: any) {
    console.error(error);
    res.status(422).json({ error: error.message || "User creation failed" });
  }
};

const createUser = async (req: Request, res: Response) => {};

export default createUser;
