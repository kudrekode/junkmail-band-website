import React from "react";

const AboutUs: React.FC = () => (
        <div className="about-us-page">
            <h1>ABOUT US</h1>

            <p>Hailing from the heart of South East London, Junk Mail is a four-piece rock band with an alternative twist.
                We are JUNK MAIL, a 4 man band from South London making indie
                sleaze, rock, background noise. Some have tried to stop us,
                others have kept their low expectations to themselves.
                Neithe party has made us quit.
            </p>
            <p>
                If you want to contact us about shows please get in touch here
            </p>
            
            <a href="mailto:junkmailband1@gmail.com"> junkmailband1@gmail.com</a>


            <div className="band-image">
                <img src="../../public/assets/bandimages/jmband2.jpg" alt="Band"/>
            </div>


        </div>


    )
;

export default AboutUs;
