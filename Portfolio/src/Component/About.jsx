import React from 'react';
import profileImage from '../assets/profile small.jpeg'; // Make sure you have this image or replace the path

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src={profileImage}
            alt="Shraddha Sharma"
            className="rounded-2xl shadow-lg w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 object-cover"
          />
        </div>

        {/* About Me Text */}
        <div className="md:w-2/3 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I’m Shraddha Sharma, a Geospatial Developer passionate about transforming complex datasets into
            meaningful, visual stories. I blend technical expertise in GIS, React, and .NET with a strong background
            in open-source mapping and real-world impact projects.
          </p>
          <p className="mb-4">
            Currently at Texas A&M Forest Service and pursuing my Master’s degree, I’m open to new roles where I can
            grow as a full-stack or GIS developer. I love working at the intersection of code, maps, and storytelling.
          </p>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
            <span className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white px-3 py-1 rounded-full text-sm">ArcGIS JS API</span>
            <span className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white px-3 py-1 rounded-full text-sm">SQL</span>
            <span className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white px-3 py-1 rounded-full text-sm">Leaflet</span>
            <span className="bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white px-3 py-1 rounded-full text-sm">PostGIS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
