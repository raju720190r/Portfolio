import React, { useEffect, useState } from "react";
import Service from "./service";


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mx-5 md:mx-16 text py-14">
      <h2 className="text-3xl font-bold inline-block border-b-2 mb-10">
        What I Do
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;