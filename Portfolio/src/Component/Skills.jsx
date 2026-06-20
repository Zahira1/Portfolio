import Reveal from './Reveal';

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind / Bootstrap'],
  },
  {
    label: 'Backend',
    skills: ['C# / .NET Core', 'ASP.NET Core', 'Entity Framework Core', 'REST API Design', 'SQL Server'],
  },
  {
    label: 'Esri Platform',
    specialization: true,
    skills: [
      'ArcGIS Maps SDK for JavaScript',
      'ArcGIS Experience Builder (Custom Widgets)',
      'ArcGIS Web AppBuilder',
      'ArcGIS Dashboards',
      'ArcGIS Enterprise (Portal/Server)',
      'ArcGIS Online',
      'ArcGIS Pro',
      'Arcade Expressions',
      'ArcGIS REST API',
    ],
  },
  {
    label: 'Python & Geospatial Data',
    skills: [
      'Python (ArcPy, Pandas)',
      'ETL Pipelines',
      'Geoprocessing Services',
      'Coordinate Reference Systems',
      'Cartographic Design',
    ],
  },
  {
    label: 'Tools & Practices',
    skills: ['Git / GitHub / GitHub Actions', 'Visual Studio / VS Code', 'AI-assisted code review via GitHub Actions', 'Responsive and Accessible Design'],
  },
];

const CERTIFICATIONS = [
  'UX Design: 1 Overview',
  'React.js Essential Training',
  'Building Web APIs with ASP.NET Core 8',
  'Probability and Inference',
  'Foundations of Regression and Predictive Modeling',
];

const Skills = () => {
  return (
    <section id="skills" aria-label="Skills and certifications" className="bg-[#0b1220] text-gray-200 py-20 sm:py-28 border-t border-cyan-500/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <Reveal>
          <p className="font-mono text-cyan-400 text-sm mb-2">
            <span aria-hidden="true">## </span>skills
          </p>
          <h2 className="text-3xl font-bold mb-12 text-white">What I work with</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal key={group.label} delayMs={index * 100}>
              <div
                className={`geo-grid-dense rounded-xl p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 ${
                  group.specialization
                    ? 'border border-cyan-400/40 hover:border-cyan-300/60'
                    : 'border border-cyan-500/15 hover:border-cyan-400/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-mono text-sm text-cyan-300">{group.label}</h3>
                  {group.specialization && (
                    <span className="font-mono text-[10px] uppercase tracking-wide text-cyan-200 bg-cyan-500/15 border border-cyan-400/30 px-2 py-0.5 rounded-full">
                      specialization
                    </span>
                  )}
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-mono" aria-hidden="true">
                        &gt;
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-mono text-sm text-cyan-300 mb-4">certifications</h3>
          <ul className="flex flex-wrap gap-2 font-mono text-xs">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert}
                className="bg-cyan-500/10 text-cyan-200 border border-cyan-500/30 px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-cyan-500/20 hover:-translate-y-0.5"
              >
                {cert}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
