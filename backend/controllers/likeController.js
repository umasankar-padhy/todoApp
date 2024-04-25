
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({ post, user });
        const saveLike = await like.save();
        const updatePost = await Post.findByIdAndUpdate(post, { $push: { likes: saveLike._id } }, { new: true })
            .populate("likes").exec();
        res.status(200).json({
            success: true,
            data: updatePost,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "error while liking post",
            message: err.message
        });
    }
};






exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body;
        // const unlike = new unLike({ post, user });
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});
        const updatePost = await Post.findByIdAndUpdate(post, { $pull: { likes: deleteLike._id } }, { new: true }).populate("likes").exec();;
            
        res.status(200).json({
            success: true,
            data: updatePost,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "error while unliking post",
            message: err.message
        });
    }
};







