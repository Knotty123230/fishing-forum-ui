import React, {useState} from "react";
import "./Posts.css";

interface Post {
    id: number;
    name: string;
    description: string;
    userId: number;
    date: string;
    photoUrl: string
    likes: number
}

interface Comment {
    id: number;
    postId: number;
    content: string;
    userId: number;
    likes: number;
    date: string;
}

interface User {
    id: number;
    name: string;
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([
        {
            id: 1,
            name: "Перший пост",
            description: "Опис першого поста",
            userId: 1,
            likes: 20,
            photoUrl: "public/1_preview-ozero.jpg",
            date: "11.01.2024"
        },
        {
            id: 2,
            name: "Другий пост",
            description: "Опис другого поста",
            userId: 2,
            likes: 21,
            photoUrl: "public/images.jpg",
            date: "11.01.2024"
        },
        {
            id: 3,
            name: "Третій пост",
            description: "Опис третього поста",
            userId: 3,
            likes: 30,
            photoUrl: "public/pexels-eberhard-grossgasteiger-2098405.jpg",
            date: "11.01.2024"
        }
    ]);

    const [comments, setComments] = useState<Comment[]>([
        {id: 1, postId: 1, content: "Коментар до першого поста", userId: 4, likes: 10, date: "2024-03-20"},
        {id: 2, postId: 1, content: "Ще один коментар до першого поста", userId: 5, likes: 5, date: "2024-03-21"},
        {id: 3, postId: 2, content: "Коментар до другого поста", userId: 6, likes: 7, date: "2024-03-22"},
        {id: 4, postId: 3, content: "Коментар до третього поста", userId: 7, likes: 3, date: "2024-03-23"}
    ]);

    const [users] = useState<User[]>([
        {id: 1, name: "Юзер 1"},
        {id: 2, name: "Юзер 2"},
        {id: 3, name: "Юзер 3"},
        {id: 4, name: "Юзер 4"},
        {id: 5, name: "Юзер 5"},
        {id: 6, name: "Юзер 6"},
        {id: 7, name: "Юзер 7"}
    ]);

    const handleLikePost = (postId: number) => {
        const updatedPosts = posts.map(post =>
            post.id === postId ? {...post, likes: post.likes + 1} : post
        );
        setPosts(updatedPosts);
    };


    return (
        <div className="posts_container">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <h3>{post.name}</h3>
                    <div className="post_image_wrapper">
                        <img src={post.photoUrl} alt="Post" className="post_image"/>
                    </div>
                    <div className="post__button-container">
                        <p className="post__author">Автор: {users.find(user => user.id === post.userId)?.name || 'Не відомий'}</p>
                        <p className="post__date">Дата створення: {post.date}</p>
                    </div>
                    <button
                        className="post__button-comments">Коментарі: {comments.filter(comment => comment.postId === post.id).length}</button>
                    <button
                        className="post__button-likes"
                        onClick={() => handleLikePost(post.id)}
                    >
                        Лайки: {post.likes}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Posts;
