import {} from 'express';
import * as db from '../db/queries.js';
import { title } from 'node:process';
export async function getPosts(req, res) {
    console.log(req.query);
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
//# sourceMappingURL=postsController.js.map