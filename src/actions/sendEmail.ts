"use server";
import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "../../email/ContactFormEmail";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const senderName = (formData.get("senderName") as string | null) || undefined;
  const projectType =
    (formData.get("projectType") as string | null) || undefined;
  if (!message) {
    throw new Error("Invalid message");
  }
  if (!senderEmail) {
    throw new Error("Invalid sender email");
  }
  const subject = projectType
    ? `Personal Website · ${projectType}`
    : "Personal Website Message";
  try {
    await resend.emails.send({
      from: "Personal Website Contact Form <onboarding@resend.dev>",
      replyTo: senderEmail as string,
      to: "abdallah.nassim.meridja@gmail.com",
      subject,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName,
        projectType,
      }),
    });
  } catch (err) {
    throw err;
  }
}
