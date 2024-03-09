const { Router } = require("express");
const { userModel } = require("../models/user");

const router = Router();

router.get("/signup", (req, res) => {
    return res.send("signup");
})

router.get("/signin", (req, res) => {
    return res.render("login",{message : ''});
})

router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    if (!username ||
        !email ||
        !password)
        return res.status(400).json({"msg" : "Somtthing is Missing"});
    
    const result = await userModel.create({
        username,
        email,
        password
    });
    console.log(result);
    return res.status(201).json({"msg" : result});
})

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    //console.log(req.body);
    try {
        const token = await userModel.matchpassword(email, password);
        const user = await userModel.findOne({ email });
        // console.log(user);
        return res.cookie("token",token,{ sameSite: "None", secure: true }).status(201).json({"msg" : user});
    } catch (err) {
        return res.status(404).json({"msg" : "Somthing Wrong"});
    };
});

router.get("/logout", (req, res) => {
    res.clearCookie("token").redirect("/");
})

module.exports = {router};