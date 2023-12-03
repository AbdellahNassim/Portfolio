import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Abdellah Nassim MERIDJA, All rights
        reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span>
        built with Next.js (App Router & Server Actions), Typescript,
        TailwindCSS, Framer Motion, React Email, Resend.
      </p>
    </footer>
  );
}

export default Footer;
