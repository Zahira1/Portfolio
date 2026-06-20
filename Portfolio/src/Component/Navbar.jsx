import { useState } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#education', label: 'education' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b1220]/90 backdrop-blur-md border-b border-cyan-500/20">
      <nav
        aria-label="Primary"
        className="container mx-auto px-4 h-16 flex items-center justify-between"
      >
        <a
          href="#home"
          className="font-mono text-cyan-300 text-sm sm:text-base tracking-tight hover:text-cyan-200"
        >
          shraddha<span className="text-gray-500">.</span>sharma
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-gray-300 hover:text-cyan-300 transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {`<${link.label}/>`}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-gray-200 p-2 rounded hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul id="mobile-menu" className="md:hidden flex flex-col gap-1 px-4 pb-4 font-mono text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 text-gray-300 hover:text-cyan-300"
                onClick={() => setIsOpen(false)}
              >
                {`<${link.label}/>`}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
