export default function ProfileCard() {
  const socialLinks = [
    {
      platform: "GitHub",
      url: "github.com/apetro",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    { platform: "Gmail", url: "mail@gmail.com", icon: "📧" },
    { platform: "WhatsApp", url: "+380123456789", icon: "💬" },
    { platform: "LinkedIn", url: "linkedin.com/in/apetro", icon: "💼" },
    { platform: "Portfolio", url: "apetro.dev", icon: "🌐" },
  ];

  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
  ];

  return (
    <div className="bg-[#202020] rounded-2xl p-6 border border-[#202020] w-[390px]">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-[#0F0F0F] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
          ОП
        </div>
        <h1 className="font-normal text-base text-[#F8F8F8] mb-2">
          Олексій Петренко
        </h1>
        <p className="text-[#99A1AF] text-sm">Frontend Developer</p>
      </div>

      {/* Social Links */}
      <div className="mb-6">
        {socialLinks.map((link, index) => (
          <div
            key={index}
            className="flex items-center text-[#99A1AF] mb-3 last:mb-0"
          >
            <span className="w-6 mr-3">{link.icon}</span>
            <span className="text-sm">{link.url}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
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
