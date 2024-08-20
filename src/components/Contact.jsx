import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  // États pour les champs de formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qst76of", "template_p3tzie9", form.current, {
        publicKey: "m_7MqE4C0r9MH6dja",
      })
      .then(
        () => {
          // Réinitialiser les champs de formulaire
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message envoyé avec succès !");
        },
        (error) => {
          toast.error("Échec de l'envoi du message.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <ToastContainer theme="dark" position="top-center" />
      <SectionTitle title="Me contacter" />
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-group">
          <div className="input-box">
            <input
              name="from_name"
              type="text"
              placeholder="Nom et prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="from_email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group-2">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" value="Envoyer" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
