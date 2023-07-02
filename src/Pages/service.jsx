import React from "react";

const Service = ({ service }) => {
  const { name, _id, description, icon } = service;
  return (
    <div className="flex text-white border border-indigo-500 p-5 hover:bg-slate-700 transition-all">
      <i class={icon}></i>
      <div>
        <h2 className="text-2xl mb-3">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;