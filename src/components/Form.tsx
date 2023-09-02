import style from "../styles/modules/form.module.css";
import Error from "./Error";
import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../helpers/emailSend";

interface HandleNameChangeInterface {
  target: HTMLInputElement | HTMLTextAreaElement;
}

export default function Form(): ReactElement {
  const [form, setForm] = useState<any>({
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [error, setError] = useState<string>("");
  const [disabled, setDisabled] = useState(false);

  const handleForm = (e: HandleNameChangeInterface) => {
    setForm((form: any) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(form).includes("")) {
      const err = [];
      for (const key in form) {
        form[key] === "" && err.push(key);
      }
      setError(`Los campos vacios son ${err}`);
      return setTimeout(() => setError(""), 5000);
    }
    sendEmail(form);
    setDisabled(true);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      exit={{ opacity: 0 }}
      className={style.form}
      onSubmit={(e) => submitForm(e)}
    >
      {error ? <Error error={error} /> : null}
      <input
        onChange={(e) => handleForm(e)}
        name="email"
        type="email"
        placeholder="Ingresa tu correo"
      />
      <input
        onChange={(e) => handleForm(e)}
        name="asunto"
        type="text"
        placeholder="Ingresa el asunto"
      />
      <textarea
        onChange={(e) => handleForm(e)}
        name="mensaje"
        placeholder="Manda tu mensaje"
      />
      <button disabled={disabled} type="submit">
        Enviar
      </button>
    </motion.form>
  );
}
