import Reveal from './Reveal';

const EDUCATION = [
  {
    school: 'The University of Texas at Austin',
    degree: 'Master of Science, Data Science',
    period: 'In progress',
  },
  {
    school: 'Tribhuvan University, IOE, Pashchimanchal Campus',
    degree: "Bachelor's Degree, Geomatics Engineering",
    period: 'November 2015 — December 2019',
  },
  {
    school: 'Gandaki Higher Secondary Boarding School',
    degree: 'High School Diploma',
    period: '',
  },
];

const Education = () => {
  return (
    <section id="education" aria-label="Education" className="bg-[#0b1220] text-gray-200 py-20 sm:py-28 border-t border-cyan-500/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal>
          <p className="font-mono text-cyan-400 text-sm mb-2">
            <span aria-hidden="true">## </span>education
          </p>
          <h2 className="text-3xl font-bold mb-12 text-white">Where I studied</h2>
        </Reveal>

        <ul className="grid sm:grid-cols-3 gap-6 mb-10">
          {EDUCATION.map((entry, index) => (
            <Reveal key={entry.school} delayMs={index * 100}>
              <li className="geo-grid-dense rounded-xl border border-cyan-500/15 p-5 h-full transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10">
                {entry.period && (
                  <p className="font-mono text-xs text-cyan-300 mb-2">{entry.period}</p>
                )}
                <h3 className="text-base font-semibold text-white mb-1">{entry.school}</h3>
                <p className="text-sm text-gray-400">{entry.degree}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="font-mono text-xs text-cyan-200 bg-cyan-500/10 border border-cyan-500/30 inline-block px-3 py-1.5 rounded-md">
            Honors: IOE Scholarship
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Education;
