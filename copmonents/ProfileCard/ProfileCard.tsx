"use client";

import {
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGlobe,
  FaUser,
} from "react-icons/fa";

export default function ProfileCard() {
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/apetro",
      displayUrl: "github.com/apetro",
      icon: <FaGithub className="w-5 h-5" />,
      type: "link" as const,
    },
    {
      platform: "Gmail",
      url: "mailto:mail@gmail.com",
      displayUrl: "mail@gmail.com",
      icon: <FaEnvelope className="w-5 h-5" />,
      type: "email" as const,
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/380123456789",
      displayUrl: "+380123456789",
      icon: <FaWhatsapp className="w-5 h-5" />,
      type: "phone" as const,
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/apetro",
      displayUrl: "linkedin.com/in/apetro",
      icon: <FaLinkedin className="w-5 h-5" />,
      type: "link" as const,
    },
    {
      platform: "Portfolio",
      url: "https://apetro.dev",
      displayUrl: "apetro.dev",
      icon: <FaGlobe className="w-5 h-5" />,
      type: "link" as const,
    },
  ];

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ];

  const handleLinkClick = (url: string, type: string) => {
    if (type === "email" || type === "phone") {
      window.open(url, "_blank");
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="bg-[#202020] rounded-2xl shadow-lg p-4 md:p-6 border border-[#202020] w-full">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-[#0F0F0F] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
          <FaUser className="w-8 h-8" />
        </div>
        <h1 className="font-normal text-base text-[#F8F8F8] mb-2">
          Олексій Петренко
        </h1>
        <p className="text-[#99A1AF] text-sm">Frontend Developer</p>
      </div>

      <div className="mb-6">
        {socialLinks.map((link, index) => (
          <button
            key={index}
            onClick={() => handleLinkClick(link.url, link.type)}
            className="flex items-center text-[#99A1AF] mb-3 last:mb-0 hover:text-[#5DD62C] transition-colors duration-200 w-full text-left"
          >
            <span className="w-6 mr-3 flex items-center justify-center">
              {link.icon}
            </span>
            <span className="text-sm hover:underline">{link.displayUrl}</span>
          </button>
        ))}
      </div>

      <div className="border-t border-[#99A1AF] my-4"></div>

      {/* Skills */}
      <div>
        <h3 className="font-semibold text-[#99A1AF] mb-3 text-lg">Стек</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-[#5DD62C] px-3 py-2 rounded-lg text-sm font-medium border border-[#5DD62C]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
