// ProgressSideBar.tsx
"use client";
import React from "react";
import { ExperienceProgressItems } from "../mainGameScreen/MainGameScreen";

interface ProgressSideBarProps {
  progressByCategory: Record<"Skills" | "Projects" | "Experience", ExperienceProgressItems[]>;
}

const ProgressSideBar: React.FC<ProgressSideBarProps> = ({ progressByCategory }) => {
  return (
    <div
      style={{
        width: window.innerWidth < 768 ? "100%" : "200px",
        padding: "10px",
        backgroundColor: "#111",
        color: "white",
        display: "flex",
        flexDirection: window.innerWidth < 768 ? "row" : "column",
        justifyContent: window.innerWidth < 768 ? "space-around" : "flex-start",
        alignItems: "center",
      }}
    >
      {Object.entries(progressByCategory).map(([category, items]) => {
        const caughtCount = items.filter(item => item.count > 0).length;
        const totalCount = items.length;
        const progressPercent = (caughtCount / totalCount) * 100;

        return (
          <div key={category} style={{ marginBottom: "20px" }}>
            <h3 style={{
              marginBottom: "5px", 
              textTransform: "uppercase", 
              userSelect: "none",
              WebkitUserSelect: "none",
              WebkitTapHighlightColor: "transparent",
              touchAction: "none",
            }}>{category}</h3>
            <div style={{
              fontSize: "14px", 
              marginBottom: "5px", 
              userSelect: "none",
              WebkitUserSelect: "none",
              WebkitTapHighlightColor: "transparent",
              touchAction: "none",
            }}>
              {caughtCount} / {totalCount} caught
            </div>
            <div style={{ height: "12px", backgroundColor: "#333", borderRadius: "6px", overflow: "hidden" }}>
              <div
                style={{
                  width: `${progressPercent}%`,
                  height: "100%",
                  backgroundColor: "#0f0",
                  transition: "width 0.3s",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSideBar;
