import React from "react";

const contacts = [
  { name: "LinkedIn", link: "https://www.linkedin.com/in/sharmili-m-sharmili-m-949530299", icon: "images/social-1834011_1280.png" },
  { name: "GitHub", link: "https://github.com/sharmilimohan", icon: "images/logo-2582757_1280.png" },
  { name: "Email",link: "mailto:sharmili.m04@gmail.com", icon: "images/envelope-3413133_1280.png" },
    { name: "contact no",phoneno:"9344095838", link: "mailto:sharmili.m04@gmail.com", icon: "images/download.png" },

];

export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-cards">
        {contacts.map((c, index) => (
          <div key={index} className="contact-card" onClick={() => window.open(c.link, "_blank")}>
            <img src={c.icon} alt={c.name} />
            <h3>{c.name}</h3>
            <h6>{c.phoneno}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
