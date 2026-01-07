import {} from 'express';
import * as db from '../db/queries.js';
export async function getPosts(req, res) {
    const posts = await db.findPosts();
    console.log(typeof (posts));
}
export async function createPost(req, res) {
}
//# sourceMappingURL=postsController.js.map