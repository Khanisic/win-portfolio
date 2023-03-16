import React, { useState } from "react";
import Icon from "./Icon";
import chrome from "../Icons/Desktop/chrome.png";
import next from "../Icons/Folder/nextjs.png";
import django from "../Icons/Folder/django.png";
import react from "../Icons/Folder/reactjs.png";
import vite from "../Icons/Folder/vite.png";
import Icons from "../Icons";
import { data } from "../Icons/Portfolio";
import PortfolioProject from "./PortfolioProject";

function Portfolio({ portfolioModal, setPortfolioModal }) {
  const [currentProject, setCurrentProject] = useState(0);
  console.log(currentProject);
  return (
    <div
      onClick={() => {
        setPortfolioModal(!portfolioModal);
      }}
      className="folder-main absolute flex flex-col items-center content-center h-screen justify-center w-full top-0"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="windows-main overflow-auto md:w-5/6 max-h-[600px] portfolio w-2/4 flex flex-col items-center py-8"
      >
        <h1 className="text-black font-bold text-xl text-center">Projects</h1>
        <div className="flex md:hidden w-full px-10 gap-10 justify-between items-center">
          <div className="w-[150px] z-50">
            <Icons.Left
              onClick={() => {
                if (currentProject - 1 < 0) {
                  setCurrentProject(data.length - 1);
                } else {
                  setCurrentProject((prev) => prev - 1);
                }
              }}
            />
          </div>
          <div className="flex mx-3">
            <PortfolioProject project={data[currentProject]} />;
          </div>
          <div className="w-[150px] z-50 flex justify-end">
            <Icons.Right
              onClick={() => {
                if (currentProject + 1 === data.length) {
                  setCurrentProject(0);
                } else {
                  setCurrentProject((prev) => prev + 1);
                }
              }}
            />
          </div>
        </div>
        <div className="hidden  md:flex flex-col gap-2">
          <Icon
            img={django}
            type="3"
            name="Grievance Portal"
            subtxt="Python | Django"
          />
          <Icon
            img={django}
            type="3"
            name="Sentiment Analyser"
            subtxt="Python | Django | nltk | vader"
          />
          {data.map((project, index) => {
            return (
              <Icon
                onClick={() => { window.open(project.vercel, '_blank') }}
                img={project.stack[1]}
                type="3"
                name={project.title}
                subtxt="Python | Django | nltk | vader"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
