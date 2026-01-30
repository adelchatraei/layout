import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home";
import ContactPage from "./page/contact";
import Header from "./components/header";
import Setting from "./page/setting";
import { LoginContext } from "./context/login";
import { useState } from "react";
import Auth from "./page/auth/auth";

function App() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <Router>
            <LoginContext.Provider value={{ isLogin, setIsLogin }}>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/setting" element={<Setting />} />
                        <Route path="/auth" element={<Auth />} />
                    </Route>
                </Routes>
            </LoginContext.Provider>
        </Router>
    );
}

export default App;
