import profileImage from '../assets/Profile Small.jpeg';
import Reveal from './Reveal';

const About = () => {
  return (
    <section id="about" aria-label="About me" className="bg-[#0b1220] text-gray-200 py-20 sm:py-28 border-t border-cyan-500/10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Image */}
        <Reveal className="md:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl border border-cyan-400/30 transition-transform duration-300 group-hover:-inset-2" aria-hidden="true" />
            <img
              src={profileImage}
              alt="Portrait of Shraddha Sharma"
              className="rounded-2xl shadow-lg w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover relative transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </Reveal>

        {/* About Me Text */}
        <Reveal delayMs={150} className="md:w-2/3 text-center md:text-left">
          <p className="font-mono text-cyan-400 text-sm mb-2">
            <span aria-hidden="true">## </span>about
          </p>
          <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
          <p className="mb-4 text-gray-300">
            I'm a Geospatial Developer and a curious person.
          </p>
          <p className="mb-4 text-gray-300">
            In my 8-to-5, you can find me deep in codebases. Maintaining and upgrading existing web GIS
            applications, building new ones to help my folks at Texas A&amp;M Forest Service, exploring the
            Esri suite and applying it to my projects, managing web GIS services, and always looking for
            places to apply my Python automation skills.
          </p>
          <p className="mb-4 text-gray-300">
            My journey started with a Bachelor's in Geomatics Engineering. From there, I moved to Thailand
            to pursue a career as a Research Associate at the Geoinformatics Center, where I worked on an
            open-source Python crop yield library, built sleek and easy-to-understand COVID-19 GIS
            dashboards alongside policymakers, and supported disaster response systems.
          </p>
          <p className="mb-4 text-gray-300">
            Around that time, I had a life-changing opportunity to work with the Chepang people, an
            indigenous tribe in Nepal. The project taught me something I carry with me to this day. Maps
            aren't just visuals. When done well, they show the reality of people's lives to those who can
            change them.{' '}
            <span className="font-mono text-cyan-300">
              The data spoke for the community in a way words couldn't.
            </span>
          </p>
          <p className="mb-4 text-gray-300">
            That experience set me on the path I'm on now. I'm currently pursuing my Master of Science in
            Data Science at UT Austin to deepen my understanding of statistics, AI, and how emerging
            technologies can help solve real-world problems through data.
          </p>
          <p className="mb-6 text-gray-300">
            Outside of my 8-to-5 and all things GIS, you'll find me hopping on a plane or hitting the road
            to explore new places, cultures, geographies, and food. Travel keeps me humble, creative, and
            sane. You'll also catch me in the kitchen experimenting with new ingredients, at the gym, on a
            sports field, shopping, or hanging out in cute cafés with my friends. Even though I can't
            actually drink coffee.
          </p>

          {/* Skills Badges */}
          <ul className="flex flex-wrap gap-2 justify-center md:justify-start font-mono text-xs">
            {[
              'React',
              'TypeScript',
              'ArcGIS Maps SDK',
              'C# / .NET Core',
              'Python (ArcPy, GeoPandas)',
              'SQL Server',
              'ArcGIS Enterprise',
            ].map((skill) => (
              <li
                key={skill}
                className="bg-cyan-500/10 text-cyan-200 border border-cyan-500/30 px-3 py-1 rounded-full transition-all duration-200 hover:bg-cyan-500/20 hover:-translate-y-0.5"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
