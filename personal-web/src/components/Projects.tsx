import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "../components/Icon";
import GitHubIcon from "../assets/github.svg?react";
import pfp from "../assets/pfp.png";

export const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Project 1",
      description:
        "Description for project 1. Description for project 1. Description for project 1. Description for project 1. Description for project 1. Description for project 1.",
      link: "https://example.com/project1",
      image: pfp,
    },
    {
      title: "Project 2",
      description: "Description for project 2",
      link: "https://example.com/project2",
      image: pfp,
    },
    {
      title: "Project 3",
      description: "Description for project 3",
      link: "https://example.com/project3",
      image: pfp,
    },
    {
      title: "Project 4",
      description: "Description for project 4",
      link: "https://example.com/project4",
      image: pfp,
    },
    {
      title: "Project 5",
      description: "Description for project 5",
      link: "https://example.com/project5",
      image: pfp,
    },
  ];

  return (
    <div className="bg-backgroundthree flex flex-col items-center justify-center py-5 text-black">
      <h1 className="mb-5 text-center text-3xl font-bold">Projects</h1>

      <Carousel
        className="w-full max-w-5/6"
        opts={{
          dragFree: true,
          loop: true,
          startIndex: 0,
        }}
      >
        <CarouselContent>
          {projectData.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="p-1">
                <Card className="text-backgroundthree h-150">
                  <CardHeader className="py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-70 w-full rounded-t-lg object-cover"
                    />
                    <div className="flex flex-row justify-between">
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon
                          label="GitHub"
                          className="text-backgroundthree hover:text-primary ml-2 h-5 w-5 fill-current transition md:h-10 md:w-10"
                        />
                      </a>
                    </div>
                    <CardDescription className="my-2 max-h-32 overflow-y-auto text-start text-lg">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
