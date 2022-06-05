const express = require("express");
const router = express.Router();
const {RegisterUser,LoginUser,authUser} = require("../Controllers/user.controller");

router.post("/register-user",RegisterUser);
router.post("/login-user",LoginUser);
router.post("/auth-user",authUser);



export default router;