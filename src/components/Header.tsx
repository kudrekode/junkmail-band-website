import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
    <header className="header">
        <div className="social-top">
            <a href="https://www.facebook.com/people/Junk-Mail/100087613688698/" target="_blank" rel="noreferrer">
                <img src="assets/link_images/jmfb.png" alt="Facebook" className="social-icon"/>
            </a>
            <a href="https://www.instagram.com/junkmail_music/" target="_blank" rel="noreferrer">
                <img src="assets/link_images/jminsta.png" alt="Instagram" className="social-icon"/>
            </a>
            <a href="https://www.tiktok.com/@junkmail_music" target="_blank" rel="noreferrer">
                <img src="assets/link_images/jmtiktok.png" alt="TikTok" className="social-icon"/>
            </a>
        </div>

        <Link to="/" className="logo-link">
            <img src="assets/misc/jmlogo5.png" alt="Band Logo" className="main-logo" />
        </Link>

    </header>
);

export default Header;
