import { type Response, type Request } from 'express';
declare global {
    namespace Express {
        interface Request {
            token?: string | undefined;
        }
    }
}
export declare function LogInPost(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=authController.d.ts.map