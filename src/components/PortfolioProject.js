import React, { useEffect, useState } from "react";

function PortfolioProject({ project, index, scale }) {

  return (
    <div
    onClick={() => { window.open(project.vercel, '_blank') }}
      className={` ease-in-out transition-transform cursor-pointer duration-800 relative group flex  h-[450px] items-center justify-center py-4`}
    >
      <div className="rounded-lg w-[40px] absolute transition-all duration-500 ease-in-out  group-hover:-translate-x-[250px] group-hover:-translate-y-[160px] group-hover:rotate-[-20deg]">
        <img className="rounded-lg  w-[40px]  " alt="" src={project.stack[0]} />
      </div>

      <div className="rounded-lg w-[40px] absolute transition-all duration-500 ease-in-out  group-hover:translate-x-[250px]  group-hover:-translate-y-[160px] group-hover:rotate-[20deg]">
        <img className="rounded-lg  w-[40px] " alt="" src={project.stack[1]} />
      </div>

      <div className="rounded-lg w-[40px] absolute transition-all duration-500 ease-in-out  group-hover:-translate-x-[250px] group-hover:translate-y-[160px] group-hover:rotate-[-20deg]">
        <img className="rounded-lg  w-[40px]  " alt="" src={project.stack[2]} />
      </div>

      <div className="rounded-lg w-[40px] absolute transition-all duration-500 ease-in-out  group-hover:translate-x-[250px]  group-hover:translate-y-[160px] group-hover:rotate-[20deg]">
        <img className="rounded-lg  w-[40px] " alt="" src={project.stack[3]} />
      </div>

      <div className="shadow-xl rounded-lg w-[400px] h-[200px] absolute transition-all duration-500 ease-in-out  -translate-x-2 group-hover:translate-x-2 -translate-y-6  rotate-[-3deg] group-hover:rotate-[3deg]">
        <img
          className="rounded-lg  w-[400px] h-[200px] "
          alt=""
          src={project.images[2]}
        />
      </div>
      <div className="shadow-xl rounded-lg w-[400px] h-[200px] absolute transition-all duration-500 ease-in-out -translate-x-1 group-hover:translate-x-1 rotate-[-1deg] group-hover:rotate-[1deg]">
        <img
          className="rounded-lg  w-[400px] h-[200px] "
          alt=""
          src={project.images[3]}
        />
      </div>
      <div className="shadow-xl rounded-lg w-[400px] h-[200px] absolute transition-all duration-500 ease-in-out -translate-x-4 group-hover:translate-x-4 rotate-[-4deg] group-hover:rotate-[4deg]">
        <img
          className="rounded-lg  w-[400px] h-[200px] "
          alt=""
          src={project.images[1]}
        />
      </div>
      <div className="shadow-xl rounded-lg w-[400px] h-[200px] absolute transition-all duration-500 ease-in-out translate-x-3 group-hover:-translate-x-3 rotate-[2deg] group-hover:rotate-[-2deg]">
        <img
          className="rounded-lg  w-[400px] h-[200px] "
          alt=""
          src={project.images[0]}
        />
      </div>
      <div className="flex flex-col justify-center items-center py-4">
        <p className="text-black font-semibold translate-y-[110px] group-hover:translate-y-[160px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out ">
          {project.title}
        </p>
        <p className="max-w-[800px] text-black text-center text-[12px] translate-y-[110px] group-hover:translate-y-[160px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out ">
          {project.subtitle}
        </p>
      </div>
    </div>
  );
}

export default PortfolioProject;
