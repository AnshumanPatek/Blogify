const {mongoose} = require("mongoose");
const { createHmac } = require('crypto');
const { createWebToken} = require('../services/authentication');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        slat: {
            type: String,
        },
        password: {
            type: String,
            require: true,
        },
        profileImgURL: {
            type: String,
            default: '/image/profile.webp',
        },
        role: {
            type: String,
            enum: ["USER", "ADMIN"],
            default: "USER",
        }
    },
    { timestamps: true }
);

userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password"))
        return;

    const salt = "someRandom";
    const hashPassword = createHmac('sha256', salt).update(user.password).digest("hex");

    this.salt = salt;
    this.password = hashPassword;

    next();
});

userSchema.static("matchpassword", async function (email, password) {
    const user = await this.findOne({email});
    if (!user)
        throw new Error("User Not Found");

    const salt = "someRandom";
    const hashpassword = user.password;

    const userhashedPass = createHmac('sha256', salt).update(password).digest("hex");

    if (userhashedPass !== hashpassword)
        throw new Error("Invalid password");

    const token = createWebToken(user);
    return token;
})

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel };