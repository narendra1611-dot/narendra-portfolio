import React, { useState } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import itTicketImg from "../assets/Capture 1.PNG";
import portfolioImg from "../assets/portfolio.PNG";
import brandSetupImg from "../assets/brand3.jpg";
import ecommerceImg from "../assets/multi vender.png";
import chatAppImg from "../assets/chat app.jpg";
import chessyPizzaImg from "../assets/chessy pizza.jpg";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark
    ? "bg-blue-950 hover:bg-blue-900/50"
    : "bg-blue-50 hover:bg-blue-100";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";

  // ✅ PROJECT DATA (COMPLETED)
  const completedProjects = [
    {
      title: "IT Ticket System",
      desc: "A ticketing system built in React.js and Ant Design for managing IT support requests, including ticket assignment, tracking, and dashboards.",
      img: itTicketImg,
      live: "https://tms.crustycodes.com/",
      git: "#",
      tech: ["React.js", "Redux", "Ant Design", "REST API"],
    },
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio showcasing skills, experience, and projects with Framer Motion animations and dark/light mode support.",
      img: portfolioImg,
      live: "https://mayur-portfolio-eight.vercel.app/",
      git: "#",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "Next.js"],
    },
    {
      title: "Business Brand Setup",
      desc: "Developed Google Business and social media setup automation for clients to enhance online visibility and manage digital presence.",
      img: brandSetupImg,
      live: "#",
      git: "#",
      tech: ["SEO", "Google Business", "Brand Setup"],
    },
  ];

  // ✅ PROJECT DATA (UPCOMING)
  const upcomingProjects = [
    {
      title: "Chessy Pizza Shop",
      desc: "Client project for a pizza restaurant website with online ordering, menu management, and responsive design.",
      img: chessyPizzaImg,
      live: "#",
      git: "#",
      tech: ["React.js", "Tailwind CSS", "Firebase", "Stripe"],
    },
    {
      title: "Ecommerce Multi-vendor Website",
      desc: "A multi-vendor eCommerce platform allowing multiple sellers to register, list products, and manage orders in real-time.",
      img: ecommerceImg,
      live: "#",
      git: "#",
      tech: ["React.js", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "Chat App",
      desc: "Real-time chat application with text and media messaging, online/offline status, and group chat support.",
      img: chatAppImg,
      live: "#",
      git: "#",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    },
  
  ];

  // RENDER PROJECT GRID
  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`rounded-2xl border ${borderColor} shadow-xl overflow-hidden transition-all duration-500 transform ${hoveredIndex === index
              ? "scale-105 -translate-y-3 shadow-2xl"
              : "hover:-translate-y-2"
            } ${cardBg} group relative`}
        >
          <div className="relative h-56 overflow-hidden bg-gradient-to-b from-blue-500/10 to-transparent">
            <img
              src={project.img}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${hoveredIndex === index
                  ? "bg-black/40 opacity-100"
                  : "bg-black/0 opacity-0"
                }`}
            ></div>
          </div>

          <div className="p-6 flex flex-col justify-between h-[280px]">
            <div>
              <h3
                className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? "text-white" : "text-gray-900"
                  }`}
              >
                {project.title}
              </h3>
              <p className={`text-sm leading-relaxed ${textPrimary}`}>
                {project.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300 ${isDark
                      ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                      : "bg-blue-100 text-blue-700 border border-blue-200"
                    }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform ${hoveredIndex === index ? "scale-105" : "scale-100"
                  } ${isDark
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
                  }`}
              >
                <FaExternalLinkAlt className="text-sm" /> Live
              </a>
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold border-2 transition-all duration-300 transform ${hoveredIndex === index ? "scale-105" : "scale-100"
                  } ${isDark
                    ? "border-blue-400 text-blue-400 hover:bg-blue-950/50 hover:border-blue-300"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700"
                  }`}
              >
                <FaGithub className="text-sm" /> GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
          }`}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        {/* COMPLETED PROJECTS SECTION */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"
              }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>
        {renderProjects(completedProjects)}

        {/* UPCOMING PROJECTS SECTION */}
        <div className="text-center my-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"
              }`}
          >
            Upcoming{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>
        {renderProjects(upcomingProjects)}
      </div>
    </div>
  );
};

export default Work;
