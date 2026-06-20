import Reveal from './Reveal';

const EXPERIENCE = [
  {
    org: 'Texas A&M Forest Service',
    role: 'Geospatial Developer II',
    period: 'Oct 2022 — Present',
    location: 'College Station, TX',
    highlights: [
      'Architected responsive web mapping applications with React and JavaScript, optimized for desktop and mobile.',
      'Built and maintained custom widgets for ArcGIS Experience Builder and Web AppBuilder to meet specialized business requirements.',
      'Developed C#/.NET Core backends and optimized RESTful APIs serving large geospatial datasets with dynamic filtering.',
      'Automated geospatial data ingestion, validation, and publishing pipelines using Python (ArcPy), integrating external APIs and WMS sources.',
      'Authored Arcade expressions translating business rules into dynamic map layer and dashboard visualizations for policymakers.',
    ],
  },
  {
    org: 'Asian Institute of Technology',
    role: 'Research Associate',
    period: 'Nov 2020 — May 2022',
    location: 'Pathum Thani, Thailand',
    highlights: [
      'Built a real-time web app with Web AppBuilder, ArcGIS Dashboards, and AGOL to help policymakers monitor COVID-19.',
      'Developed Python ETL pipelines automating geospatial data ingestion and transformation from satellite and drone sources for post-disaster response.',
      'Led a team designing a low-cost, high-accuracy GNSS receiver, deployed across drone projects for ground control point collection.',
    ],
  },
  {
    org: 'YouthMappers',
    role: 'Research Fellow',
    period: 'Jan 2020 — Dec 2021',
    location: 'Remote',
    highlights: [
      'Led a multidisciplinary student team in a geospatial study of the Chepang tribe using open-source GIS tools.',
      'Generated data-driven visualizations to support evidence-based policymaker decisions.',
    ],
  },
  {
    org: 'Geoinformatic Center',
    role: 'Intern',
    period: 'Oct 2019 — Jan 2020',
    location: 'Pathum Thani, Thailand',
    highlights: [],
  },
];

const Work = () => {
  return (
    <section id="experience" aria-label="Work experience" className="bg-[#0b1220] text-gray-200 py-20 sm:py-28 border-t border-cyan-500/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal>
          <p className="font-mono text-cyan-400 text-sm mb-2">
            <span aria-hidden="true">## </span>experience
          </p>
          <h2 className="text-3xl font-bold mb-12 text-white">Where I've worked</h2>
        </Reveal>

        <ol className="relative border-l border-cyan-500/20 pl-8 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <Reveal as="li" key={`${job.org}-${job.period}`} delayMs={index * 100} className="relative group">
              <span
                className="absolute -left-[2.6rem] top-1.5 w-3 h-3 rounded-full bg-cyan-400 transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-cyan-300 mb-1">{job.period}</p>
              <h3 className="text-lg font-semibold text-white">{job.role}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {job.org} · {job.location}
              </p>
              {job.highlights.length > 0 && (
                <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-gray-300">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Work;
