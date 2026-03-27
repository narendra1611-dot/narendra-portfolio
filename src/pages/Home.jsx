import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import Typewriter from "typewriter-effect";
import { FaLaptopCode, FaReact, FaPalette, FaCode, FaServer, FaBug, FaSearch } from "react-icons/fa";
import profileImg from "../assets/img2.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";

  const roles = [
    { icon: FaLaptopCode, title: "Data Analyst", desc: "Collecting, analyzing, and interpreting data insights" },
    { icon: FaReact, title: "Web Developer", desc: "Designing and developing responsive websites" },
    { icon: FaPalette, title: ".PHP Developer", desc: "Developing backend web applications using PHP" },
    { icon: FaBug, title: "Social Media Management", desc: "Managing social media content and engagement" },
  ];
  return (
    <div className={`${containerBg} min-h-screen transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start pt-14">
          {/* ==== LEFT SECTION ==== */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"
                }`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                Narendra Kumawat
              </span>
            </h1>

            {/* ==== STATIC TITLE + TYPEWRITER ==== */}
            <p
              className={`text-lg sm:text-xl md:text-2xl font-semibold mb-6 ${textSecondary}`}
            >
              {/* React.js Specialist <br /> */}
              <span className="text-base sm:text-lg md:text-3xl block mt-2">
                <Typewriter
                  options={{
                    strings: [
                      "Data Analyst",
                      "Web Developer",
                      ".PHP Developer",
                      "Social Media Management",
                      "Content Marketing",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 40, // typing speed
                    deleteSpeed: 20, // backspace speed
                    pauseFor: 1200, // wait before next word
                  }}
                />
              </span>
            </p>

            {/* ==== ABOUT TEXT ==== */}
            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 ${textPrimary}`}
            >
              I'm a passionate{" "}
              <span className="font-semibold">Front-End Developer</span>{" "}
              specializing in{" "}
              <span className="font-semibold">
                React.js and modern JavaScript frameworks
              </span>
              . Beyond coding, I explore{" "}
              <span className="font-semibold">UI/UX design trends</span>, focus
              on creating{" "}
              <span className="font-semibold">
                responsive and user-friendly interfaces
              </span>
              , and enjoy solving challenging{" "}
              <span className="font-semibold">
                Front-End development problems
              </span>
              .
            </p>

            {/* ==== BUTTONS ==== */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/work">
                <button
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${isDark
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                >
                  View My Work
                </button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1C-HPrmKzE8vUffLD3L0vBWHiLt_QFgTa/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
              >
                Download CV
              </a>
              <Link to="/connect">
                <button
                  className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 text-sm sm:text-base cursor-pointer ${isDark
                    ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>

          {/* ==== RIGHT SECTION ==== */}
          <div className="flex flex-col items-center gap-8">
            {/* Profile Image */}
            <div
              className={`relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-4xl overflow-hidden border-4 ${isDark ? "border-blue-900/40" : "border-blue-200"
                } shadow-2xl`}
            >
              <img
                src={profileImg}
                alt="Mayur Patil"
                className="w-100 h-95 object-cover"
              />
            </div>

            {/* Roles Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${isDark
                      ? "bg-blue-950 hover:bg-blue-900/80"
                      : "bg-blue-100 hover:bg-blue-200"
                      }`}
                  >
                    <Icon className={`text-xl sm:text-2xl ${textSecondary}`} />
                    <div>
                      <h4
                        className={`font-bold text-base sm:text-lg ${isDark ? "text-white" : "text-gray-900"
                          }`}
                      >
                        {role.title}
                      </h4>
                      <p
                        className={`text-sm sm:text-base ${textPrimary} leading-snug`}
                      >
                        {role.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
