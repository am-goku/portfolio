"use server";
import { EmailTemplate } from "@/app/components/EmailTemplate";
import { renderAsync } from "@react-email/components";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API?.replace(/[";]/g, "").trim());

type formData = {
  name: string;
  email: string;
  phone: string | null;
  content: string;
};

const sendEmail = async ({ name, email, phone, content }: formData) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const html = await renderAsync(
        React.createElement(EmailTemplate, {
          name: name as string,
          content: content as string,
          phone: phone as string | null,
        })
      );

      const emailOptions = {
        from: "Portfolio <onboarding@resend.dev>",
        to: [`${process.env.EMAIL?.replace(/[";]/g, "").trim()}`],
        reply_to: email,
        subject: "Message from Portfolio.",
        html: html,
      };

      resend.emails
        .send(emailOptions)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export default sendEmail;
