import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, tu pourrais envoyer les données à un serveur ou un service email
        setSubmitted(true);
    };

    const ContactMessage = () => (
    <div className="contact-message">
        <h3>Vous avez une question ou un projet ?</h3>
        <p>
            N'hésitez pas à me contacter via le formulaire ci-dessous. Je suis toujours ouvert à discuter de nouvelles opportunités, collaborations ou simplement à répondre à vos questions !
        </p>
    </div>
);

const ContactForm = ({ form, handleChange, handleSubmit }) => (
    <form className="contact-form" onSubmit={handleSubmit}>
        <label>
            Nom :
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
            />
        </label>
        <label>
            Email :
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
            />
        </label>
        <label>
            Message :
            <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
            />
        </label>
        <button type="submit">Envoyer</button>
    </form>
);
    return (
        <section className="contact-section">
        <h2>Contactez-moi</h2>
        <ContactMessage />
        {submitted ? (
            <p>Merci pour votre message ! Je vous répondrai bientôt.</p>
        ) : (
            <ContactForm
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        )}
    </section>
    );
};


export default Contact;