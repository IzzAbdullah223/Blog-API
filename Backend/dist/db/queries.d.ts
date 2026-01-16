export declare function getPosts(sortBy: string): Promise<{
    id: number;
    title: string;
    text: string;
    published: boolean;
    publishedAt: Date;
    authorId: number;
}[] | undefined>;
export declare function createPost(title: string, text: string): Promise<void>;
export declare function getPost(id: number): Promise<({
    tag: {
        id: number;
        name: string;
        postId: number;
    }[];
} & {
    id: number;
    title: string;
    text: string;
    published: boolean;
    publishedAt: Date;
    authorId: number;
}) | null>;
export declare function deletePost(id: number): Promise<void>;
export declare function publishPost(id: number): Promise<void>;
export declare function unPublishPost(id: number): Promise<void>;
//# sourceMappingURL=queries.d.ts.map