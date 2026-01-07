import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './config/passport.js';
import { authRouter } from './routes/auth.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', authRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${3000}`);
});
//# sourceMappingURL=app.js.map