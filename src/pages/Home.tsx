import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
    <div className="home-page">
        <div className="main-nav">
            <Link to="/upcoming-gigs" className="nav-item">
                <h2>UPCOMING GIGS</h2>
                <img src="src/assets/misc/jmnogigs.png" alt="Upcoming Gigs" />
            </Link>
            
            <a href="https://open.spotify.com/track/2AVAAYsmisVlT7mh0APsA3" className="nav-item">
                <h2>LATEST SINGLE</h2>
                <img src="src/assets/misc/jmhungrycover.png" alt="Latest Single" />
            </a>
            
            <Link to="/merch" className="nav-item">
                <h2>MERCH</h2>
                <img src="src/assets/misc/jmmerch.png" alt="Merch" />
            </Link>
        </div>
        <div className="streaming-links">
            <a href="https://www.youtube.com/channel/UC4TgELnho9M_Nrry9lE7lqg" target="_blank" rel="noreferrer">
                <img src="src/assets/link_images/jmtidal.png" alt="Tidal" className="streaming-icon" />
            </a>
            <a href="https://open.spotify.com/artist/4j0ndzELCmHK752wwibr7b" target="_blank" rel="noreferrer">
                <img src="src/assets/link_images/jmspotify.png" alt="Spotify" className="streaming-icon" />
            </a>
            <a href="https://music.apple.com/gb/artist/junk-mail/1675917204" target="_blank" rel="noreferrer">
                <img src="src/assets/link_images/jmapple.png" alt="Apple Music" className="streaming-icon" />
            </a>
        </div>

        <nav className="bottom-nav">
            <Link to="/contact">Contact</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/sign-up">Sign Up</Link>
            <a href="https://open.spotify.com/playlist/0syAxxWwelaOK2a6zOeIz3" target="_blank" rel="noreferrer">Playlist</a>
        </nav>

        <div className="band-image">
            <img src="src/assets/bandimages/jmband.jpg" alt="Band" />
        </div>
    </div>
);

export default Home; 