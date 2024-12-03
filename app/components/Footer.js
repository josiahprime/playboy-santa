import { FaTelegram, FaTwitter, FaChartBar } from "react-icons/fa";
import SnowAnimation from "./SnowAnimation";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-10 relative overflow-hidden">
      {/* Falling Snow Animation */}
      <SnowAnimation/>
      {/* Snowflake Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-snowflake-pattern opacity-10 w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10 relative z-10">
        {/* Prominent Buy Section */}
        <div className="bg-white text-red-600 text-center py-6 px-4 rounded-lg shadow-lg border-4 border-white">
          <a
            href="#buy"
            className="text-3xl font-extrabold tracking-wider hover:underline transition duration-300"
          >
            🎅 Buy $Playboy Santa Now! 🎄
          </a>
        </div>

        {/* Other Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
          {/* Logo and Description */}
          <div>
            <h2 className="text-3xl font-extrabold mb-2">🎄 Playboy Santa</h2>
            <p className="text-white text-opacity-90">
              Naughty or nice? Doesn’t matter. Join the wildest Santa on his
              unforgettable holiday adventures. 🎅💨
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="https://twitter.com/playboysanta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300"
            >
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a
              href="https://charts.example.com/playboysanta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300"
            >
              <FaChartBar />
              <span>Charts</span>
            </a>
            <a
              href="https://t.me/playboysanta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-yellow-300 transition duration-300"
            >
              <FaTelegram />
              <span>Telegram</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white border-opacity-50 pt-4 text-center text-sm text-white text-opacity-70">
          © {new Date().getFullYear()} Playboy Santa. Spreading festive chaos and joy.
        </div>
      </div>
    </footer>
  );
}
