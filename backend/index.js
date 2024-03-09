const express = require("express");
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');
const { mongoose } = require("mongoose");
const cookieParser  = require('cookie-parser');
const { checkforAuthCookies } = require("./middleware/auth");
const { blogModel } = require("./models/blog");
const PORT = 8000;
const app = express();

const { router } = require("./routes/user");
const { blogrouter } = require("./routes/blog");

//connect database
mongoose.connect("mongodb://localhost:27017/blogify-react")
.then(() => {
    console.log("Connection Successfull");
}).catch((err) => {
    console.log("Not Able to Connect ", err);
});

//set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkforAuthCookies("token"));
app.use(express.static(path.resolve('./public')));

app.get("/", async (req, res) => {
    const allblogs = await blogModel.find({});
    return res.status(201).json({ "blogs": allblogs });
});
 
app.use("/user", router);
app.use("/blog", blogrouter);

app.listen(PORT, () => {
    console.log("Server Start on Port 8000");
});