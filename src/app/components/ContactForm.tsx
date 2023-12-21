"use client";
import React, { useEffect, useState } from "react";

import "@/styles/Form.css";
import ContactSubmit from "./ContactSubmit";
import Done from "./Done";

const ContactForm = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");

  const [subStatus, setSubStatus] = useState(null)

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);


  useEffect(()=> {
      if(subStatus){
        const tgl = document.getElementById("toggleBtn");
        tgl?.click()
    }
  }, [subStatus])

  return (
    <>
      <div className="container font-mono">
        <input type="checkbox" className="hidden" id="signup_toggle" />
        <div className="form flex">
          <div className="form_front flex-col md:flex-row">
            <div className="flex flex-col gap-10">
              <input
                placeholder="Name"
                className="input"
                type="text"
                onChange={(e) => setName(e.target.value.trim())}
              />
              <input
                placeholder="Email"
                className="input"
                type="text"
                onChange={(e) => setEmail(e.target.value.trim())}
              />
              <input
                placeholder="Phone Number"
                className="input"
                type="text"
                pattern="[0-9]*"
                onChange={(e) => setPhone(e.target.value.trim())}
              />
              {error && (
                <span className="text-red-700 font-mono hidden md:flex">
                  {error}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-5">
              <textarea
                placeholder="Write Something"
                className="input h-40 resize-none placeholder:mt-5"
                onChange={(e) => setContent(e.target.value.trim())}
              />
              {error && (
                <span className="text-red-700 font-mono md:hidden flex">
                  {error}
                </span>
              )}
              <ContactSubmit
                name={name}
                content={content}
                phone={phone}
                email={email}
                setError={setError}
                setStatus={setSubStatus}
              />
              <span className="switch hidden">
                <label
                  id="toggleBtn"
                  className="signup_tog"
                  htmlFor="signup_toggle"
                ></label>
              </span>
            </div>
          </div>
          {/* Backside */}
          <div className="form_back overflow-hidden">
                <Done />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
