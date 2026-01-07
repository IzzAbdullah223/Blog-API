import {} from 'express';
import * as db from '../db/queries.js';
import jwt, {} from 'jsonwebtoken';
export async function LogInPost(req, res) {
    const user = req.user;
    jwt.sign({ user: user }, process.env.SECRET_KEY, { expiresIn: '7d' }, (err, token) => {
        res.json({
            token
        });
    });
}
//# sourceMappingURL=authController.js.map