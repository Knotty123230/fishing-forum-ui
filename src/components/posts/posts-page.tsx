import Posts from "./Posts.tsx";
import "./posts-page.css"

const PostsPage = () => {
    return (
        <div className="post-page">
            <div className="post-page__container">
                <Posts/>
            </div>
        </div>
    );
};

export default PostsPage;