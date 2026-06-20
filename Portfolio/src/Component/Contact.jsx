import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Reveal from './Reveal';

const Contact = () => {
  return (
    <section id="contact" aria-label="Contact" className="bg-[#0b1220] text-gray-200 py-20 sm:py-28 border-t border-cyan-500/10">
      <Reveal className="container mx-auto px-4 max-w-2xl text-center">
        <p className="font-mono text-cyan-400 text-sm mb-2">
          <span aria-hidden="true">## </span>contact
        </p>
        <h2 className="text-3xl font-bold mb-4 text-white">Let's talk</h2>
        <p className="text-gray-300 mb-8">
          Open to conversations about geospatial engineering, full-stack roles, or interesting mapping
          problems.
        </p>
        <div className="flex justify-center gap-4 font-mono text-sm">
          <a
            href="mailto:shraddha.sharma2100@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-cyan-500 text-[#0b1220] font-semibold transition-all duration-200 hover:bg-cyan-400 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <FaEnvelope aria-hidden="true" />
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/shra-sharma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-cyan-500/40 text-cyan-200 transition-all duration-200 hover:bg-cyan-500/10 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
