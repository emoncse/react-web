import React from "react";

const technologies = [
  "Python",
  "Go",
  "Django",
  "Django Rest Framework",
  "React.js",
  "Next.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase",
  "AWS",
  "Jenkins",
  "Docker",
  "GitHub",
  "GitLab",
];

const TechnologyMarquee = () => (
  <div className="testimonials bg-white rounded-lg py-8 px-6 max-w-4xl mx-auto my-8">
    <div className="tech-marquee  bg-white-100 py-4 px-8 rounded-lg overflow-hidden">
      <div className="marquee flex animate-marquee space-x-8">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-gray-700 text-base font-medium whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TechnologyMarquee;
