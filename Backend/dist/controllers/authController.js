import {} from 'express';
import jwt, {} from 'jsonwebtoken';
export async function LogInPost(req, res) {
    const user = req.user;
    jwt.sign({ user: user }, process.env.SECRET_KEY, { expiresIn: '7d' }, (err, token) => {
        res.json({
            token
        });
    });
}
export function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof (bearerHeader) !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        if (!bearerToken) {
            return res.status(403).json({ error: "Invalid token format" });
        }
        jwt.verify(bearerToken, process.env.SECRET_KEY, (err, authData) => {
            if (err) {
                return res.status(403).json({ error: "Invalid or expired token" });
            }
            const payload = authData;
            req.token = bearerToken;
            req.user = payload.user;
            next();
        });
    }
    else {
        res.status(403).json({ error: "No token provided" });
    }
}
//# sourceMappingURL=authController.js.map