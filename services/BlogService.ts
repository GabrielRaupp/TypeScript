// services/BlogService.ts
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';

let posts: Post[] = [];

export const getAllPosts = (): Post[] => {
    return posts;
};

export const addPost = (post: Post): void => {
    posts.push(post);
};

export const addCommentToPost = (postId: number, comment: Comment): void => {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.comments.push(comment);
    }
};
