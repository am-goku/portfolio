"use client";
import { projects } from "@/service/projectData";
import React, { useEffect, useState } from "react";

import { useSpringCarousel } from "react-spring-carousel";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [isSelected, setIsSelected] = useState(0);

  const clearUI = () => {
    const ui = document.getElementById("" + isSelected);
    ui?.classList.remove("bulgeBox2");
  };

  const {
    carouselFragment,
    thumbsFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
  } = useSpringCarousel({
    withLoop: true,
    withThumbs: true,
    items: projects.map((cv, index): any => ({
      id: index,
      renderItem: (
        <div className="w-full h-full flex justify-center items-center px-32">
          <ProjectCard
            name={cv.name}
            type={cv.type}
            desc={cv.desc}
            git={cv.git}
            link={cv.link}
            image={cv.image}
          />
        </div>
      ),
      renderThumb: (
        <div
          onClick={() => {
            slideToItem(index);
            clearUI();
            setIsSelected(index);
          }}
          id={`${index}`}
          className={`w-20 h-10 flex justify-center items-center mx-2 custom-box cursor-pointer`}
        >
          <span>{cv.name}</span>
        </div>
      ),
    })),
    springConfig: {
      bounce: 0,
      frequency: 1,
      round: 1,
    },
  });

  useEffect(() => {
    const selected = document.getElementById("" + isSelected);
    selected?.classList.add("bulgeBox2");
  }, [isSelected]);

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center overflow-hidden no-scrollbar">
        <div className="w- flex flex-col gap-10 justify-center items-center">
          <div className="py-6">{carouselFragment}</div>
        </div>
        <div className="w-full md:w-fit p-5 px-10 flex justify-center items-center no-scrollbar">
          {thumbsFragment}
        </div>
        <div className="flex gap-16">
          <div
            onClick={() => {
              slideToPrevItem();
              clearUI();
              setIsSelected(
                isSelected === 0 ? projects.length - 1 : isSelected - 1
              );
            }}
            className="btnRound p-2 rounded-full"
          >
            Prev
          </div>
          <div
            onClick={() => {
              slideToNextItem();
              clearUI();
              setIsSelected(
                isSelected === projects.length - 1 ? 0 : isSelected + 1
              );
            }}
            className="btnRound p-2 rounded-full"
          >
            Next
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
