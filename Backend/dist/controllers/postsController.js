import {} from 'express';
import * as db from '../db/queries.js';
export async function getPosts(req, res) {
    const sortBy = req.query.sortBy;
    try {
        const posts = await db.getPosts(sortBy);
        return res.status(200).json(posts);
    }
    catch (error) {
        return res.status(500).json({
            Message: "Failed to fetch posts"
        });
    }
}
export async function getPost(req, res) {
    console.log("Is this function even running?");
    const postID = Number(req.params.PostId);
    console.log(postID);
    try {
        const post = await db.getPost(postID);
        return res.status(200).json(post);
    }
    catch (err) {
        return res.status(500).json({
            Message: "Failed to fetch post"
        });
    }
}
export async function createPost(req, res) {
    try {
        await db.createPost(req.body.title, req.body.text);
        res.status(201).json({
            message: "Post created."
        });
    }
    catch (err) {
        res.status(500).json({ message: "Failed to create ost." });
    }
}
export async function deletePost(req, res) {
    const PostId = Number(req.params.PostId);
    try {
        await db.deletePost(PostId);
        res.status(200).json({
            message: "Post deleted sucessfuly"
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to delete post "
        });
    }
}
//# sourceMappingURL=postsController.js.map