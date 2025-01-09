import React from "react";
import { Link } from "react-router-dom";

const MainButtons: React.FC = () => (
    <div className="main-buttons">
        <Link to="/upcoming-gigs">
            <img src="/placeholder-gigs.jpg" alt="Upcoming Gigs" />
        </Link>
        <a href="https://external-link-to-latest-single.com" target="_blank" rel="noreferrer">
            <img src="/placeholder-single.jpg" alt="Latest Single" />
        </a>
        <Link to="/merch">
            <img src="/placeholder-merch.jpg" alt="Merch" />
        </Link>
    </div>
);

export default MainButtons;
