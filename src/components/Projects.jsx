import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_API_URL from "../config";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/projects/`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  return (
    <div className="projects bg-white rounded-lg overflow-hidden max-w-4xl mx-auto my-8">
      <h2 className="px-6 py-4 text-2xl font-semibold text-gray-800 border-gray-200">
        Our Projects
      </h2>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project, index) => (
            <li
              key={index}
              className="px-6 py-4 hover:bg-gray-100 transition-colors duration-200"
            >
              <h3 className="text-lg font-medium text-gray-700">
                {project.name}
              </h3>
              {project.description && (
                <p className="text-sm text-gray-500 mt-1">
                  {project.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="px-6 py-10 text-center text-gray-500">
          No projects available at the moment.
        </div>
      )}
    </div>
  );
};

export default Projects;
