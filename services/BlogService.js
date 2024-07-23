"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCommentToPost = exports.addPost = exports.getAllPosts = void 0;
let posts = [];
const getAllPosts = () => {
    return posts;
};
exports.getAllPosts = getAllPosts;
const addPost = (post) => {
    posts.push(post);
};
exports.addPost = addPost;
const addCommentToPost = (postId, comment) => {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.comments.push(comment);
    }
};
exports.addCommentToPost = addCommentToPost;
