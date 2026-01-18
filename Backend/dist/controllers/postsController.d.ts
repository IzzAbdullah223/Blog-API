import { type Request, type Response } from 'express';
export declare function getPosts(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getPost(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
interface createPostBody {
    title: string;
    text: string;
    tags: string[];
}
export declare function createPost(req: Request<{}, {}, createPostBody>, res: Response): Promise<void>;
export declare function deletePost(req: Request, res: Response): Promise<void>;
export declare function updatePublish(req: Request, res: Response): Promise<void>;
interface ArticleBody {
    name: string;
    comment: string;
}
export declare function commentPost(req: Request<{
    PostId: string;
}, {}, ArticleBody>, res: Response): Promise<void>;
export {};
//# sourceMappingURL=postsController.d.ts.map