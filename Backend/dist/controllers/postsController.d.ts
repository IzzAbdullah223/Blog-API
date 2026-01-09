import { type Request, type Response } from 'express';
export declare function getPosts(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
interface createPostBody {
    title: string;
    text: string;
}
export declare function createPost(req: Request<{}, {}, createPostBody>, res: Response): Promise<void>;
export {};
//# sourceMappingURL=postsController.d.ts.map