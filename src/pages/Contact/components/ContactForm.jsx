import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const STATUS = { IDLE: "idle", SENDING: "sending", SUCCESS: "success", ERROR: "error" };

const validate = ({ name, email, message }) => {
  if (!name.trim()) return "Le nom est requis.";
  if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Adresse email invalide.";
  if (!message.trim()) return "Le message est requis.";
  return null;
};

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(formRef.current));
    const validationError = validate(data);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setStatus(STATUS.SENDING);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus(STATUS.SUCCESS);
        formRef.current.reset();
      })
      .catch(() => setStatus(STATUS.ERROR));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-caption font-bold text-(--color-text)/70">Nom</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Votre nom"
            className="bg-bg-second rounded-xl px-4 py-3 text-body outline-none border border-main/30 focus:border-main transition-colors duration-300 placeholder:text-(--color-text)/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-caption font-bold text-(--color-text)/70">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            className="bg-bg-second rounded-xl px-4 py-3 text-body outline-none border border-main/30 focus:border-main transition-colors duration-300 placeholder:text-(--color-text)/30"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-caption font-bold text-(--color-text)/70">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Votre message..."
          className="bg-bg-second rounded-xl px-4 py-3 text-body outline-none border border-main/30 focus:border-main transition-colors duration-300 placeholder:text-(--color-text)/30 resize-none"
        />
      </div>

      {error && <p className="text-caption text-red-400">{error}</p>}

      {status === STATUS.SUCCESS && (
        <p className="text-caption text-main">Message envoyé ! Je vous répondrai dans les plus brefs délais.</p>
      )}

      {status === STATUS.ERROR && (
        <p className="text-caption text-red-400">Une erreur est survenue. Réessayez ou contactez-moi directement par email.</p>
      )}

      <button
        type="submit"
        disabled={status === STATUS.SENDING}
        className="btn-primary self-start"
      >
        {status === STATUS.SENDING ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
};

export default ContactForm;
