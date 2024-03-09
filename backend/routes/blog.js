const { Router } = require("express");
const { blogModel } = require("../models/blog");
const { commentModel } = require("../models/comment");
const multer = require("multer");
const path = require("path");

const blogrouter = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve('./public/uploads/'))
    },
    filename: function (req, file, cb) {
        const uniquefilename = `${Date.now()}-${file.originalname}`;
      cb(null,  uniquefilename)
    }
  })
  
  const upload = multer({ storage: storage })

blogrouter.get("/add-blog", (req, res) => {
    res.render("addblog", {
        user: req.user
    });
})

blogrouter.get("/:id", async (req, res) => {
  const blog = await blogModel.findById(req.params.id).populate("createdBy");
  const comments = await commentModel.find({ blogId: req.params.id }).populate("createdBy");
  // console.log(comments);
  // console.log(blog)
  return res.status(201).json({
    user: req.user,
    message: '',
    blog:blog,
    comments:comments,
  })
})

blogrouter.post("/",upload.single('coverImg'), async (req, res) => {
    //console.log(req.body);
    const result = await blogModel.create({
        title: req.body.title,
        body: req.body.body,
        createdBy: req.body.user_id,
        coverImgURL: `/uploads/${req.body.file}`,
    })
    console.log(result);
    res.status(201).json({"msg":result});
})


blogrouter.post("/comment/:blogId", async (req, res) => {
  //console.log(req.body);
  const result = await commentModel.create({
    content: req.body.content,
    blogId: req.params.blogId,
    createdBy: req.body.user_id,
  });

  return res.status(201);
})


module.exports = {blogrouter};