import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

interface Post {
    id: number;
    name: string;
    description: string;
    userId: number;
    date: string;
    photoUrl: string;
    likes: number;
}

const Post: React.FC = () => {
    const location = useLocation()
    const [post, setPost] = useState<Post>(
        {
            id: 1,
            name: "Перший пост ццвфцвфцвфц",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            userId: 1,
            likes: 20,
            photoUrl: "public/1_preview-ozero.jpg",
            date: "11.01.2024"
        });
    const handleLikePost = (postId: number) => {
        const updatedPost = post.id === postId ? {...post, likes: post.likes + 1} : post;
        setPost(updatedPost);
    };


    return (
        <div>
            <h1>{post.name}</h1>
            <img src={post.photoUrl}/>
            <p>{post.description}</p>
            <button onClick={() => handleLikePost(post.id)}>Лайки: {post.likes}</button>
            <p>Дата створення: {post.date}</p>
        </div>
    );
}

export default Post;