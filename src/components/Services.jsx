import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_API_URL from "../config";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/services/`)
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <div className="services max-w-4xl mx-auto bg-white rounded-lg overflow-hidden my-8">
      <h2 className="px-6 py-4 text-2xl font-semibold text-gray-800 border-gray">
        Our Services
      </h2>
      {services.length > 0 ? (
        <ul className="divide-y divide-gray">
          {services.map((service, index) => (
            <li
              key={index}
              className="px-6 py-4 hover:bg-gray transition-colors duration-200"
            >
              <h3 className="text-lg font-medium text-gray">{service.name}</h3>
              {service.description && (
                <p className="text-sm text-gray mt-1">{service.description}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="px-6 py-10 text-center text-gray">
          No services available at the moment.
        </div>
      )}
    </div>
  );
};

export default Services;
