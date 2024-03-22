import React, {useState} from "react";
import "./Posts.css";
import Modal from "../Modal.tsx";
import Post from "./post-page/Post.tsx"
import {useNavigate} from "react-router-dom";

interface Post {
    id: number;
    name: string;
    description: string;
    userId: number;
    date: string;
    photoUrl: string;
    likes: number;
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
            name: "Перший пост ццвфцвфцвфц",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            userId: 1,
            likes: 20,
            photoUrl: "public/1_preview-ozero.jpg",
            date: "11.01.2024"
        },
        {
            id: 2,
            name: "Другий пост",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            userId: 2,
            likes: 21,
            photoUrl: "public/images.jpg",
            date: "11.01.2024"
        },
        {
            id: 3,
            name: "Третій пост",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            userId: 3,
            likes: 30,
            photoUrl: "public/pexels-eberhard-grossgasteiger-2098405.jpg",
            date: "11.01.2024"
        }, {
            id: 4,
            name: "Третій пост",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            userId: 3,
            likes: 30,
            photoUrl: "public/thumb-1920-367772-1868409394.jpg",
            date: "11.01.2024"
        }, {
            id: 5,
            name: "Третій пост",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            userId: 3,
            likes: 30,
            photoUrl: "public/pexels-eberhard-grossgasteiger-2098405.jpg",
            date: "11.01.2024"
        }
    ]);
    const [comments] = useState<Comment[]>([
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
    const [showModal, setShowModal] = useState(false);
    const [modalImageUrl, setModalImageUrl] = useState("");

    const navigate = useNavigate()

    const handleOpenModal = (imageUrl: string) => {
        setModalImageUrl(imageUrl);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    const handleLikePost = (postId: number) => {
        const updatedPosts = posts.map(post =>
            post.id === postId ? {...post, likes: post.likes + 1} : post
        );
        setPosts(updatedPosts);
    };


    function openPost(id: number) {
        navigate("/post", {state: id})
    }

    return (
        <div className="posts_container">
            {posts.map((post) => (
                <div key={post.id} className="post">
                    <div className="post_image_wrapper">
                        <img src={post.photoUrl} onClick={() => handleOpenModal(post.photoUrl)} alt="Post"
                             className="post_image"/>
                    </div>
                    <h3 onClick={() => openPost(post.id)}>{post.name.toUpperCase()}</h3>
                    <p className="post__description">{post.description}</p>
                    <div className="post__author-date">
                        <a className="post__author">Автор: {users.find(user => user.id === post.userId)?.name || 'Не відомий'}</a>
                    </div>
                    <div className="post__button-container">
                        <button className="post__button-likes"
                                onClick={() => handleLikePost(post.id)}>Лайки: {post.likes}</button>
                        <button
                            className="post__button-comments">Коментарі: {comments.filter(comment => comment.postId === post.id).length}</button>
                        <p className="post__date">Дата створення: {post.date}</p>
                    </div>
                </div>
            ))}
            {showModal && <Modal imageUrl={modalImageUrl} onClose={handleCloseModal}/>}
        </div>
    );
};

export default Posts;
