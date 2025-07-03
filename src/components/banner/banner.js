import React from "react";
import "./banner.css"; // Assurez-vous de créer ce fichier pour le style

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-info">
                <h1>YACOUBA ASSOUMANE</h1>
                <h1>Moubarak</h1>
                <h2>Développeur Web Full Stack</h2>
                <p>
                    Passionné par la création d'applications web modernes et performantes.
                    Spécialisé en JavaScript, React, Node.js et plus encore.
                </p>
                <ul>
                    <li>Email: gabera@example.com</li>
                    <li>Localisation: Paris, France</li>
                </ul>
            </div>
            <div className="banner-image">
                <div className="code-bg">
                    <img
                        src="/images/profile.png"
                        alt="Gabera portrait"
                        className="profile-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;