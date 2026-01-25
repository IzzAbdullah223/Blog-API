import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import './config/passport.js';
import { authRouter } from './routes/auth.js';
import { postRoute } from './routes/post.js';
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
];
const app = express();
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(express.json());
app.use('/', authRouter);
app.use('/', postRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${3000}`);
});
//# sourceMappingURL=app.js.map