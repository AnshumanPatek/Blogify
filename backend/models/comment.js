const {mongoose, Schema} = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        blogId: {
            type: Schema.Types.ObjectId,
            ref: "blogs",
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "users",
        }
    },
    { timestamps: true }
);

const commentModel = mongoose.model("comment", commentSchema);

module.exports = { commentModel };