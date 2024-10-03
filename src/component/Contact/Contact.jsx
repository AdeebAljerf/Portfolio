import "./Contact.css";
import React, { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const phoneNumber = "0996034996";
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };
  return (
    <section className="contact container section " id="section--4">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-links">
        <span onClick={handleCopyClick} style={{ cursor: "pointer" }}>
          <a style={{ minWidth: "15.5rem", textAlign: "center" }}>
            {copied ? "Copied!" : "+963 992034996"}
          </a>
        </span>
        <span>
          <a target="_blank" href="https://wa.me/963992034996">
            Whatsapp
          </a>
        </span>

        <span>
          <a target="_blank" href="https://adeebaljerf2@gmail.com">
            adeebaljerf2@gmail.com
          </a>
        </span>
        <span>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/adeeb-aljerf-5591b72b4"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </section>
  );
}
