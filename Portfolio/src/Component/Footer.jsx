import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} Shraddha Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
