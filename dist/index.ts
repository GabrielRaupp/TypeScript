// index.ts
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { getAllPosts, addPost, addCommentToPost } from '../services/BlogService';

// Adicionando alguns posts de exemplo
addPost({
    id: 1,
    title: 'Primeiro Post',
    content: 'Conteúdo do primeiro post...',
    author: 'Gabriel Raupp',
    publishDate: new Date(),
    comments: []
});

addPost({
    id: 2,
    title: 'Segundo Post',
    content: 'Conteúdo do segundo post...',
    author: 'Raupp',
    publishDate: new Date(),
    comments: []
});

// Adicionando comentários aos posts
addCommentToPost(1, {
    id: 1,
    content: 'Ótimo post!',
    author: 'Raupp',
    publishDate: new Date()
});

addCommentToPost(2, {
    id: 2,
    content: 'Parabéns pelo conteúdo!',
    author: 'Raupp',
    publishDate: new Date()
});

// Exibindo todos os posts e seus comentários
const posts = getAllPosts();
posts.forEach(post => {
    console.log(`Post: ${post.title} - Autor: ${post.author}`);
    console.log('Comentários:');
    post.comments.forEach(comment => {
        console.log(`- ${comment.content} - ${comment.author}`);
    });
    console.log('----------------');
});
