export declare function getPosts(sortBy: string): Promise<{
    id: number;
    title: string;
    text: string;
    published: boolean;
    publishedAt: Date;
    readTime: string;
    authorId: number;
}[]>;
export declare function createPost(title: string, text: string, readTime: string, tags: string[]): Promise<void>;
export declare function getPost(id: number): Promise<({
    comment: {
        id: number;
        name: string;
        text: string;
        commentedAt: Date;
        postId: number;
    }[];
    tag: {
        id: number;
        name: string;
    }[];
} & {
    id: number;
    title: string;
    text: string;
    published: boolean;
    publishedAt: Date;
    readTime: string;
    authorId: number;
}) | null>;
export declare function getRandomPost(): Promise<({
    comment: {
        id: number;
        name: string;
        text: string;
        commentedAt: Date;
        postId: number;
    }[];
    tag: {
        id: number;
        name: string;
    }[];
} & {
    id: number;
    title: string;
    text: string;
    published: boolean;
    publishedAt: Date;
    readTime: string;
    authorId: number;
}) | null>;
export declare function deletePost(id: number): Promise<void>;
export declare function publishPost(id: number): Promise<void>;
export declare function unPublishPost(id: number): Promise<void>;
export declare function createComment(postId: number, name: string, comment: string): Promise<void>;
export declare function getTags(): Promise<{
    id: number;
    name: string;
}[]>;
//# sourceMappingURL=queries.d.ts.map