import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./components/auth/auth-form.tsx";
import RegistrationForm from "./components/registration/registration-form.tsx";
import PostsPage from "./components/posts/posts-page.tsx";
import Post from "./components/posts/post-page/Post.tsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<AuthForm />} />
                    <Route path="/registration" element={<RegistrationForm />} />
                    <Route path="/posts" element={<PostsPage />} />
                    <Route path="/post" element={<Post />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
