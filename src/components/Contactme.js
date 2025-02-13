import React, { useState } from "react";
import './styles/Contactme.css';
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {

    const contactme = document.getElementsByClassName("contact")[0];
    if (contactme) {
        contactme.style.display = "none";
     }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add a new document to the "contacts" collection
            await addDoc(collection(db, "contacts"), {
                name: name,
                email: email,
                message: message
            });
            alert("Thank you for your message, it has been submitted.");
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error submitting the form. Please try again.");
        }
    };
    
    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Contact Form</h1>

                <label>Name</label>
                <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>

                <label>Email</label>
                <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Message</label>
                <textarea placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

                <button type="submit">submit</button>
            </form>
        </div>
    );

};

export default Contact;