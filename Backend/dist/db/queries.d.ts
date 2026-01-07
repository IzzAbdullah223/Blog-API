export declare function findPosts(): Promise<{
    id: number;
    title: string;
    text: string;
    published: boolean;
    publishedAt: Date;
    authorId: number;
}[]>;
export declare function findUser(email: string): Promise<{
    email: string;
    id: number;
    password: string;
} | null>;
//# sourceMappingURL=queries.d.ts.map