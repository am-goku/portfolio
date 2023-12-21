"use client";
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "@/service/projectData";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";

const Projects = () => {

  const data: Object[] = projects.reduce((acc: Object[], cv): any => {
    const temp: any = {
      key: uuidv4(),
      content: (
        <ProjectCard
          name={cv.name}
          type={cv.type}
          desc={cv.desc}
          git={cv.git}
          link={cv.link}
          image={cv.image}
        />
      ),
    };
    acc.push(temp);
    return acc;
  }, []);

  const [goToSlide, setGoToSlide]: any = useState(null);

  const table = data.map((element, index: Number) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [cards] = useState(table);

  return (
    <>
      <div className="w-full h-screen flex flex-wrap gap-10 justify-center items-center overflow-hidden">
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          goToSlideDelay={500}
          offsetRadius={5}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </div>
    </>
  );
};

export default Projects;
