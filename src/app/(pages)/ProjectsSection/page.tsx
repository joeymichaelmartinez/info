"use client";
import React, { useState, useEffect, useRef } from 'react';

import ProjectCards from './projectCard/ProjectCard';
import './Projects.css';
import { projectInfo } from '@/data/projectInfo';

function Projects() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const ref = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 200, y: 200 });
  const keysPressed = useRef<{ [key: string]: boolean }>({});
  const speed = 20;

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = false;
    };

    const move = () => {
      let { x, y } = position.current;
      const keys = keysPressed.current;

      let dx = 0;
      let dy = 0;
      if (keys["ArrowUp"]) dy -= 1;
      if (keys["ArrowDown"]) dy += 1;
      if (keys["ArrowLeft"]) dx -= 1;
      if (keys["ArrowRight"]) dx += 1;

      const len = Math.hypot(dx, dy);
      if (len > 0) {
        dx /= len;
        dy /= len;
      }

      const nextX = x + dx * speed;
      const nextY = y + dy * speed;

      const padding = 10;
      const width = window.innerWidth;
      const height = window.innerHeight;

      const boundedX = Math.min(
        width - padding - 30,
        Math.max(padding, nextX)
      );
      const boundedY = Math.min(
        height - padding - 30,
        Math.max(padding, nextY)
      );

      position.current = { x: boundedX, y: boundedY };

      if (ref.current) {
        ref.current.style.transform = `translate(${boundedX}px, ${boundedY}px)`;
      }

      requestAnimationFrame(move);
    };

    requestAnimationFrame(move);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="Projects-Container">
      <div className="Projects">
        <div
          ref={ref}
          style={{
            position: "absolute",
            width: 30,
            height: 30,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.8)",
            border: "2px solid black",
            top: 0,
            left: 0,
            transform: "translate(200px, 200px)",
            transition: "transform 0.05s linear",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
        {projectInfo.map((project, index) => (
          <ProjectCards
            key={index}
            isDesktop={isDesktop}
            title={project.title}
            fullDescription={project.fullDescription}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects;