import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home";
import ContactPage from "./page/contact";
import Header from "./components/header";
import LoginPage from "./page/login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
