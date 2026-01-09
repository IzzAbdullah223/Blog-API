import { type Response, type Request, type NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            token?: string | undefined;
        }
    }
}
export declare function LogInPost(req: Request, res: Response): Promise<void>;
export declare function verifyToken(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=authController.d.ts.map