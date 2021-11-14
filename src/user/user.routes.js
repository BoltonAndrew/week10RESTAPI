const { Router } = require("express");
const { addUser, getUser, getUserToken } = require("./user.controllers");
const { findByToken, hashPassword, decryptPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.get("/token", findByToken, getUserToken);
userRouter.post("/login", decryptPassword, getUser);

module.exports = userRouter;
