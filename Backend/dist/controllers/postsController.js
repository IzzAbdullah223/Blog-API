import {} from 'express';
import * as db from '../db/queries.js';
export async function getPosts(req, res) {
    const posts = await db.findPosts();
    console.log(typeof (posts));
}
//# sourceMappingURL=postsController.js.map