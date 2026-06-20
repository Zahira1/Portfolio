import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b1220] text-white py-6 border-t border-cyan-500/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-300 transition-all duration-200 hover:text-cyan-300 hover:-translate-y-0.5 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded"
          >
            <FaGithub className="w-6 h-6" aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/shra-sharma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-300 transition-all duration-200 hover:text-cyan-300 hover:-translate-y-0.5 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded"
          >
            <FaLinkedin className="w-6 h-6" aria-hidden="true" />
          </a>

          <a
            href="mailto:shraddha.sharma2100@gmail.com"
            aria-label="Send an email"
            className="text-gray-300 transition-all duration-200 hover:text-cyan-300 hover:-translate-y-0.5 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded"
          >
            <FaEnvelope className="w-6 h-6" aria-hidden="true" />
          </a>
        </div>

        <p className="text-sm text-gray-500 font-mono">
          © {new Date().getFullYear()} Shraddha Sharma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
