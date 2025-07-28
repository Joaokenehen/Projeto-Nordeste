import { Request, Response } from "express";
import UserModel from "../model/UserModel";
import { error } from "console";

export const getAll = async (req: Request, res: Response) => {
  const users = await UserModel.findAll();
  res.send(users);
};

export const getUserById = async (
  req: Request<{ id: number }>,
  res: Response
) => {
  const findUser = await UserModel.findByPk(req.params.id);
  if (!findUser) {
    return res.status(404).json({ error: "User not found" });
  }

  const users = await UserModel.findByPk(req.params.id);
  return res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = {
      name: req.body.name,
      password: req.body.password,
      cpf: req.body.cpf,
      email: req.body.email,
      birth_date: req.body.birth_date,
    };

    if (userData.name.length < 3) {
      return res.status(400).json({
        message: "User need to have more than 3 characters",
      });
    }

    const user = await UserModel.create(userData);
    res.status(201).json({ user, message: "User created successfully" });
  } catch (error: any) {
    console.error(error);
    res.status(500).json("Server internal error " + error.message);
  }
};

export const updateUser = async (
  req: Request<{ id: number }>,
  res: Response
) => {
  try {
    const userData = {
      name: req.body.name,
      password: req.body.password,
      cpf: req.body.cpf,
      email: req.body.email,
      birth_date: req.body.birth_date,
    };

    if (userData.name.length < 3) {
      return res
        .status(400)
        .json({ error: "User need to have more than 3 characters" });
    }

    const user = await UserModel.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.name = userData.name;
    user.password = userData.password;
    user.cpf = userData.cpf;
    user.email = userData.email;
    user.birth_date = userData.birth_date;

    await user.save();
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json("Server internal error " + error.message);
  }
};

export const deleteUserById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();

    res.status(204).send();
  } catch (error: any) {
    console.error(error);
    res.status(500).json("Server internal error " + error.message);
  }
};
