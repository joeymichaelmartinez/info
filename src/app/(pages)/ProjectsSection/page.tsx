"use client";
import React, { useState, useEffect, useRef } from "react";

import ProjectCards from "./projectCard/ProjectCard";
import "./Projects.css";
import { projectInfo } from "@/data/projectInfo";
import rightArrowInverted from "../../../../public/images/right-arrow-inverted.png";

function Projects() {
  const [isDesktop, setDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth > 1024
  );

  const [currentSelected, setCurrentSelected] = useState(0);
  const currentSelectedRef = useRef<number>(currentSelected);

  useEffect(() => {
    currentSelectedRef.current = currentSelected;
  }, [currentSelected]);

  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName ?? "";
      if (
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        tag === "SELECT" ||
        tag === "BUTTON" ||
        tag === "A" ||
        (target && target.isContentEditable)
      ) {
        return;
      }

      const len = projectInfo.length;

      if (e.key === "ArrowUp") {
        setCurrentSelected((prev) => {
          const next = (prev - 3 + len) % len;
          currentSelectedRef.current = next;
          return next;
        });
        e.preventDefault();
      } else if (e.key === "ArrowDown") {
        setCurrentSelected((prev) => {
          const next = (prev + 3) % len;
          currentSelectedRef.current = next;
          return next;
        });
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        setCurrentSelected((prev) => {
          const next = (prev - 1 + len) % len;
          currentSelectedRef.current = next;
          return next;
        });
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        setCurrentSelected((prev) => {
          const next = (prev + 1) % len;
          currentSelectedRef.current = next;
          return next;
        });
        e.preventDefault();
      } else if (e.key === "Enter") {
        // read the most recent selection from the ref
        setOpenDialogIndex(currentSelectedRef.current);
        e.preventDefault();
      } else if (e.key === "Escape") {
        setOpenDialogIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projectInfo.length]); // only re-create listener if project list length changes

  // resize handler (stable)
  useEffect(() => {
    const updateMedia = () => setDesktop(window.innerWidth > 1024);
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="Projects-Container">
      <div className="Projects">
        {projectInfo.map((project, index) => (
          <div key={index} className="project-card-section">
            <div className="project-selector">
              {index === currentSelected ? (
                <img src={rightArrowInverted.src} style={{ color: "white" }} />
              ) : (
                <></>
              )}
            </div>

            <ProjectCards
              key={index}
              isDesktop={isDesktop}
              title={project.title}
              fullDescription={project.fullDescription}
              description={project.description}
              image={project.image}
              link={project.link}
              isDialogOpen={openDialogIndex === index}
              // when the child asks to open/close, update the parent index
              setIsDialogOpen={(open) => setOpenDialogIndex(open ? index : null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
