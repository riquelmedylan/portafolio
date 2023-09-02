import env from "react-dotenv";
type Email = {
  email: string;
  asunto: string;
  mensaje: string;
};
export const sendEmail = (data: Email) => {
  const dataEmail = {
    from: data.email,
    subject: data.asunto,
    text: data.mensaje,
  };
  fetch(`${env.URL_BE}/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(dataEmail),
  });
};
