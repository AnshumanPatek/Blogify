const {mongoose, Schema} = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        coverImgURL: {
            type: String,
            required: false,
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "users",
        }
    },
    { timestamps: true }
);

const blogModel = mongoose.model("blog", blogSchema);

module.exports = { blogModel };