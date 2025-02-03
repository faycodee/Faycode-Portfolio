import React from "react";
import { Linkedin, Github, Mail, Send } from "lucide-react";

const SchnellContact = () => {
  const socialLinks = [
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/faycal-oumzil-b97888250/",
      color: "#0077B5",
    },
    {
      Icon: Github,
      href: "https://github.com/faycodee",
      color: "#333",
    },
    {
      Icon: Send,
      href: "https://wa.me/+212613487814",
      color: "#25D366",
    },
    {
      Icon: Mail,
      href: "faysaloumzil1@gmail.com",
      color: "#EA4335",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "70px",
        width: "20px",
        position: "fixed",
        right: "20px",
        top: "84vh",
        zIndex: 2000,
        transform: "translateY(-50%)",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {socialLinks.map(({ Icon, href, color }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: color,
            transition: "transform 0.3s",
            transform: "scale(0.8)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(0.8)";
          }}
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
};

export default SchnellContact;
