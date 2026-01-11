export declare function getPosts(sortBy: string): Promise<{
    id: number;
    title: string;
    text: string;
    published: boolean;
    publishedAt: Date;
    authorId: number;
}[] | undefined>;
export declare function createPost(title: string, text: string): Promise<void>;
export declare function getUsers(): Promise<{
    email: string;
    id: number;
    password: string;
}[]>;
//# sourceMappingURL=queries.d.ts.map