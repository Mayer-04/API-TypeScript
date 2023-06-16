import { Request, Response } from "express";
import userModel from "../models/user.model";


const getAllUsers = async (req: Request, res: Response) => {
    try {
        const getUsers = await userModel.find();
        return getUsers
            ? res.status(200).json(getUsers)
            : res.status(404).json({ message: 'No se encontraron usuarios' });
    } catch (error) {
        return res.status(500).json({ message: `Error al obtener los usuarios: ${error}` });
    }
};

const getUserId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = await userModel.findById(id);
        return userId
            ? res.status(200).json(userId)
            : res.status(404).json({ message: `Usuario no encontrado` });
    } catch (error) {
        return res.status(500).json({ message: `Error al obtener el usuario: ${error}` });
    }
};

const createUser = async (req: Request, res: Response) => {
    try {
        const createUser = req.body;
        const newUser = await userModel.create(createUser);
        return res.status(201).json({ message: `El usuario ${newUser.username} a sido creado` });
    } catch (error) {
        return res.status(500).json({ message: `Error al crear el usuario: ${error}` });
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateById = await userModel.findByIdAndUpdate(id, req.body, { new: true });
        return updateById
            ? res.status(200).json(updateById)
            : res.status(404).json({ message: `No se encontró el usuario con el ID: ${id}` })
    } catch (error) {
        return res.status(500).json({ message: `Error al actualizar el usuario: ${error}` });
    }
};

const deleteUser = async (req: Request, res: Response) => {
    try {
        const deleteById = await userModel.findByIdAndDelete(req.params.id);
        return deleteById
            ? res.status(200).json({ message: `Se ha eliminado al usuario ${deleteById.username}` })
            : res.status(404).json({ message: 'No se encontró el producto a eliminar' });
    } catch (error) {
        return res.status(500).json({ message: `Error al eliminar el usuario: ${error}` });
    }
};

export { getAllUsers, getUserId, createUser, updateUser, deleteUser };