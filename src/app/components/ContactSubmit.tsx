import { validate } from "@/hooks/validator";
import sendEmail from "@/service/sendEmail";
import React, { useState } from "react";
import "@/styles/SubmitBtn.css";
import "@/styles/BtnLoader.css"

type formData = {
  name: string;
  email: string;
  phone: string | null;
  content: string;
  setError: Function;
  setStatus: Function;
};

const ContactSubmit = ({
  name,
  email,
  phone,
  content,
  setError,
  setStatus,
}: formData) => {

    const [loading, setLoading] = useState(false)

  const handleSubmit = async() => {
    setLoading(true)
    validate({ name, email, phone, content }).then((res)=> {
        sendEmail({ name, email, phone, content })
          .then(() => {
            setStatus(true);
            setLoading(false);
          })
          .catch(() => {
            setError("Something went wrong, Please try again.");
            setLoading(false);
          });
    }).catch((err)=> {
        setError(err?.message);
        setLoading(false)
        return;
    })
  };

  return (
    <>
      {!loading ? (
        <button type="button" className="button" onClick={handleSubmit}>
          <div className="button-top">Submit</div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
      ) : (
        <div className="w-full flex justify-center">
          <div className="BtnLoader">
            <div className="box-load1"></div>
            <div className="box-load2"></div>
            <div className="box-load3"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSubmit;
