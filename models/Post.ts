// models/Post.ts

export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    publishDate: Date;
    comments: Comment[];
}

export interface Comment {
    id: number;
    content: string;
    author: string;
    publishDate: Date;
}
