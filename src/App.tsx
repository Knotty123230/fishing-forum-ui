import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./components/auth/auth-form.tsx";
import RegistrationForm from "./components/registration/registration-form.tsx";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<AuthForm />} />
                    <Route path="/registration" element={<RegistrationForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
