import Reveal from './Reveal';

// TODO: replace with your real project repos/demo links once each one is deployed.
const PROJECTS = [
  {
    name: 'Project one',
    description: 'Short description of what it does and the stack used. Replace this placeholder.',
    repoUrl: '#',
    demoUrl: '#',
  },
  {
    name: 'Project two',
    description: 'Short description of what it does and the stack used. Replace this placeholder.',
    repoUrl: '#',
    demoUrl: '#',
  },
];

const PUBLICATIONS = [
  'E-CAD: Web-Based Information Service for Land Management',
  'Emergency Monitoring System (for Real-Time Ambulance Data)',
  'The Role of Open-Source Python Package GeoServer-REST in Web-GIS Development',
];

const ProjectCard = ({ name, description, repoUrl, demoUrl }) => (
  <div className="geo-grid-dense rounded-xl border border-cyan-500/15 p-6 flex flex-col h-full transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-cyan-500/10">
    <h3 className="font-mono text-white font-semibold mb-2">{name}</h3>
    <p className="text-sm text-gray-300 flex-1 mb-4">{description}</p>
    <div className="flex gap-3 font-mono text-xs">
      <a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-md border border-cyan-500/30 text-cyan-200 transition-all duration-200 hover:bg-cyan-500/10 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        Source
      </a>
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-md bg-cyan-500 text-[#0b1220] font-semibold transition-all duration-200 hover:bg-cyan-400 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        Live demo
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" aria-label="Projects" className="bg-[#0b1220] text-gray-200 py-20 sm:py-28 border-t border-cyan-500/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <p className="font-mono text-cyan-400 text-sm mb-2">
            <span aria-hidden="true">## </span>projects
          </p>
          <h2 className="text-3xl font-bold mb-4 text-white">Things I've built</h2>
          <p className="text-sm text-gray-400 mb-10">
            Each project is hosted as its own GitHub Pages site — these cards link out to the live demo
            and source.
          </p>
        </Reveal>

        <ul className="grid sm:grid-cols-2 gap-6 mb-16">
          {PROJECTS.map((project, index) => (
            <Reveal as="li" key={project.name} delayMs={index * 100} className="list-none">
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <h3 className="font-mono text-sm text-cyan-300 mb-4">publications</h3>
          <ul className="space-y-2 text-sm text-gray-300 list-disc list-outside ml-4">
            {PUBLICATIONS.map((pub) => (
              <li key={pub}>{pub}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
