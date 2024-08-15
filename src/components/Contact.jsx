import React from "react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <SectionTitle title="Me contacter" />
      <form action="" method="post">
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Nom et prénom" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Numéro de téléphone" />
            <input type="text" placeholder="Sujet" />
          </div>
        </div>

        <div className="input-group-2">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Votre message"
          ></textarea>
          <input type="submit" value="Envoyer" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Contact;
