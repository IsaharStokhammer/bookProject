var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v4 as uuidv4 } from "uuid";
import { readFromJsonFile, writeUserToJsonFile } from "../DAL/jsonUsers.js";
import bcrypt from "bcrypt";
import axios from 'axios';
export const registerUser = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield readFromJsonFile();
    const existingUser = users.find((u) => u.userName === userName);
    if (existingUser) {
        throw new Error("Username already exists.");
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUserId = uuidv4();
    const newUser = {
        id: newUserId,
        userName,
        password: hashedPassword,
        books: [],
    };
    yield writeUserToJsonFile(newUser);
    return newUserId;
});
export const authenticateUser = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield readFromJsonFile();
    const userFind = users.find((u) => u.userName === userName);
    if (!userFind) {
        throw new Error("Invalid username or password.");
    }
    const passwordMatch = bcrypt.compareSync(password, userFind.password);
    if (!passwordMatch) {
        throw new Error("Invalid username or password.");
    }
    return userFind.id ? userFind.id : ''; // just for typescript not to be mad
});
export const addBookToUser = (userId, bookName) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield readFromJsonFile();
    const existingUser = users.find((u) => u.id === userId);
    if (!existingUser) {
        throw new Error("UserId not exist.");
    }
    try {
        const book = yield axios.get(`https://openlibrary.org/search.json?title=${bookName}`);
        const newBook = {};
    }
    catch (error) {
        console.error(error);
    }
});
