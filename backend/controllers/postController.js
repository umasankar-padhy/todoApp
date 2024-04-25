
const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({ title, body });
        const savePost = await post.save();
        // const savePost = await Post.create({ title, body });
        res.status(200).json({
            success: true,
            data: savePost,
            message: 'post Created Successfully'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "error while creating Post",
            message: err.message
        });
    }
};





exports.updatePost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const { id } = req.params;
        const updatePost = await Post.findByIdAndUpdate({ _id: id }, { title, body })
        res.status(200).json(
            {
                success: true,
                data: updatePost,
                message: 'updated Successfully'
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,

            })
    }
}




exports.getAllPosts = async (req, res) => {
    try {
       
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.status(200).json(posts
        //     {
        //     success: true,
        //     data: posts,
        //    }
        );
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "error while fetching Post",
            message: err.message
        });
    }
};



exports.deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletePost = await Post.findByIdAndDelete(id);
        res.status(200).json(
            {
                success: true,
                data: deletePost,
                message: 'post deleted Successfully'
            }
        );
    }catch (err) {
        console.error(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
}

