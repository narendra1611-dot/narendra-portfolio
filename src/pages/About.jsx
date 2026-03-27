import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaCode, FaGraduationCap, FaArrowRight } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  // Development Journey
  const journey = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Academic Foundation",
      description:
        "Completed BCA from Vishwakarma University, Pune, building a strong foundation in computer science and programming.",
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "Frontend & Backend Skills",
      description:
        "Started with HTML, CSS, JavaScript, then mastered Angular.js, Node.js, and MongoDB for full-stack development.",
    },
    {
      icon: <FaArrowRight className="text-2xl" />,
      title: "Real-World Projects",
      description:
        "Worked on projects like IT Ticket System, Portfolio Website, Admin Dashboard, and Business Brand Setup Tool with live deployments.",
    },
  ];

  // Skills
  const skills = [
    {
      category: "Frontend",
      items: ["JavaScript", "HTML", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Angular.js","SQL","MongoDB"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "PowerBI", "XAMPP"],
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 pointer-events-none ${isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
          }`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${headingColor} pt-4`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${textPrimary}`}>
            Node.js Developer with 1.7 years of experience building responsive, scalable, and user-focused web applications. Skilled in Angular.js, CSS, HTML, JavaScript. Passionate about clean code, modern web technologies, and creating high-quality digital experiences.
          </p>
        </div>

        {/* Journey Section */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            My Development{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Path
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journey.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm`}
              >
                <div className="text-blue-500 mb-4">{item.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${headingColor}`}>
                  {item.title}
                </h3>
                <p className={`${textPrimary} leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 backdrop-blur-sm`}
              >
                <h3 className={`text-xl font-bold mb-4 ${headingColor}`}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${isDark
                          ? "bg-blue-900/60 text-blue-300 border border-blue-700/50 hover:bg-blue-900"
                          : "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-12 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-8 ${headingColor}`}>
            Highlights &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">3+</div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Projects Completed
                </h3>
                <p className={textPrimary}>
                  Deployed multiple real-world applications for clients and personal projects.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">$</div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Commercial Projects
                </h3>
                <p className={textPrimary}>
                  Earned revenue from client projects and commercial applications.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">🎯</div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Full-Stack Expertise
                </h3>
                <p className={textPrimary}>
                  Proficient in MERN stack development with live deployments and real-world experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className={`text-lg mb-8 ${textPrimary}`}>
            Interested in collaborating or learning more about my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/work"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
                }`}
            >
              View My Projects <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
