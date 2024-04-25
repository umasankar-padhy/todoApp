
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;
        const  comment =new Comment({ post, user, body });
        const savecomment = await comment.save();
        const updatePost =await Post.findByIdAndUpdate(post,{$push: {comments:savecomment._id}},{new :true})
                                .populate("comments").exec();
        res.status(200).json({
            success: true,
            data: updatePost,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "error while creating comment",
            message: err.message
        });
    }
};





