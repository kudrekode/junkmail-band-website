import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UpcomingGigs from "./pages/UpcomingGigs";
import Merch from "./pages/Merch";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Playlist from "./pages/Playlist";
import SignUp from "./pages/SignUp";

const App: React.FC = () => (
    <Router>
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/upcoming-gigs" element={<UpcomingGigs />} />
                <Route path="/merch" element={<Merch />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/playlist" element={<Playlist />} />
            </Routes>
        </div>
    </Router>
);

export default App;
