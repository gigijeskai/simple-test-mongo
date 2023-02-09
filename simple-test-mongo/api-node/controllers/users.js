import { mongoose } from "mongoose";
import { User } from "../models/user.js";

let users = [];

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getUserByID = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "id non idoneo" });
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const insertUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.satus(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "id non idoneo" });
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "user eliminata con successo" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = { ...req.body };
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "id non idoneo" });
  try {
    const user = await User.findByIdAndUpdate(id, data);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
