import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import "./ProjectCard.css";
import Link from "next/link";

interface ProjectCardProps {
  image: HTMLImageElement;
  title: string;
  description?: string;
  fullDescription?: string;
  link?: string;
  isDesktop?: boolean;
  isDialogOpen?: boolean;
  key: number;
  index: number;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ProjectCard({
  image,
  title,
  description,
  fullDescription,
  link,
  isDesktop,
  isDialogOpen,
  setIsDialogOpen,
  index,
}: ProjectCardProps) {
  return (
    <Dialog open={isDialogOpen}>
      <div
        id="card"
        className="cursor-pointer border rounded-lg shadow-md hover:shadow-lg transition"
        onClick={() => setIsDialogOpen(true)}
      >
        <div id="Card-Image">
          <img src={image.src} alt="Project" className={`rounded-t-lg w-full ${index !==0 ? 'invert-svg-colors' : ''}`} />
        </div>
        <div id="Card-Text" className="p-4">
          <h3 id="Card-Title" className="font-bold text-lg">
            {title}
          </h3>
          {isDesktop && (
            <p id="Card-Description" className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>

      {isDialogOpen && (
        <DialogContent 
          onEscapeKeyDown={() => setIsDialogOpen(false)} 
          onPointerDownOutside={() => setIsDialogOpen(false)} 
          className="max-w-lg"
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription asChild>
              <div className={`Modal-Image ${index !==0 ? 'invert-svg-colors' : ''}`}>
                <img src={image.src} alt="Modal Image" className={`mb-4 rounded-md w-full ${index !==0 ? 'invert-svg-colors' : ''}`} />
                <p>{fullDescription}</p>
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-between items-center mt-4">
            <Link
              href={link || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Link to GitHub
            </Link>
            <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

export default ProjectCard;
