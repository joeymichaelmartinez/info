import React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import './ProjectCard.css';

interface ProjectCardProps {
  image: HTMLImageElement
  title: string
  description?: string
  fullDescription?: string
  link?: string
  isDesktop?: boolean
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          id="card"
          className="cursor-pointer border rounded-lg shadow-md hover:shadow-lg transition"
        >
          <div id="Card-Image">
            <img src={props.image.src} alt="Project" className="rounded-t-lg w-full" />
          </div>
          <div id="Card-Text" className="p-4">
            <h3 id="Card-Title" className="font-bold text-lg"> 
              {props.title} 
            </h3>  
            {props.isDesktop && (
              <p id="Card-Description" className="text-sm text-muted-foreground">
                {props.description}
              </p>
            )}        
          </div>
        </div>
      </DialogTrigger>

      {/* Dialog itself */}
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription asChild>
            <div>
              <img 
                src={props.image.src} 
                alt="Modal" 
                className="mb-4 rounded-md w-full" 
              />
              <p>{props.fullDescription}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div 
        className="flex justify-between items-center mt-4"
        >
          <a 
            href={props.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline"
          >
            Link to GitHub
          </a>
          <DialogTrigger asChild>
            <Button variant="secondary">Close</Button>
          </DialogTrigger>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectCard
