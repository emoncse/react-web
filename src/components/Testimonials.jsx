import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_API_URL from "../config";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/testimonials/`)
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  return (
    <div className="testimonials bg-white rounded-lg py-8 px-6 max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        What Our Clients Say
      </h2>
      {testimonials.length > 0 ? (
        testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mb-6 border-l-4 border-indigo-500 pl-4 bg-gray-50 p-4 rounded-md shadow-sm"
          >
            <p className="text-lg text-gray-800 italic">
              "{testimonial.feedback}"
            </p>
            <p className="text-md font-medium text-gray-600 mt-2">
              - {testimonial.clientName}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No testimonials available at the moment.
        </p>
      )}
    </div>
  );
};

export default Testimonials;
