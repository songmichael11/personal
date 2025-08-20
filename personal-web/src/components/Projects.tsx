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
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GitHubIcon from "../assets/github.svg?react";
import Cooper from "../assets/cooper.svg?react";
import RStudio from "../assets/rstudio.svg?react";
import Consensus from "../assets/consensus.png";
import Thesis from "../assets/thesis.png";
import Planur from "../assets/planur.png";

export const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Cooper",
      description:
        "A platform that enables 10,000+ Northeastern students to view and submit reviews for co-op roles using the T3 tech stack",
      link: "https://github.com/sandboxnu/cooper",
      image: Cooper,
      technologies: [
        "TypeScript",
        "PostgreSQL",
        "React",
        "Tailwind CSS",
        "Drizzle ORM",
      ],
    },
    {
      title: "Consensus",
      description:
        "A full-stack social media application centered around economic policy proposals and utilizing regression models and deep neural networks (DNNs) that allowed users to back their posts with real data and predictions ",
      link: "https://github.com/songmichael11/Consensus",
      image: Consensus,
      technologies: [
        "Python",
        "Flask",
        "Docker",
        "Streamlit",
        "CSS",
        "MySQL",
        "TensorFlow",
      ],
    },
    {
      title: "Predicting Drug Half-life",
      description:
        "Independent research project exploring the use of molecular fingerprinting algorithms and regression models to predict the elimination half-life of drugs.",
      link: "https://github.com/songmichael11/regression-senior-thesis",
      image: Thesis,
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Jupyter Notebooks",
      ],
    },
    {
      title: "PlaNUr",
      description:
        "A web app that allowed users to search for detailed information about a requested Northeastern class and compare classes using the Banner and Rate my Professor APIs",
      link: "https://github.com/Oasis-NEU/f24-group20",
      image: Planur,
      technologies: ["JavaScript", "React", "Python"],
    },
    {
      title: "AI Detector Bias Study",
      description:
        "Study of whether AI detectors are more likely to flag essays written by non-native vs. native English speakers as AI.",
      link: "https://github.com/songmichael11/r-study",
      image: RStudio,
      technologies: ["R", "RStudio", "dplyr", "ggplot2", "readr"],
    },
  ];

  return (
    <div
      className="bg-backgroundthree flex scroll-mt-12 flex-col items-center justify-center py-5 text-black"
      id="projects"
    >
      <h1 className="text-primary mb-3 text-center text-3xl font-bold">
        Projects
      </h1>

      <Carousel
        className="w-full max-w-2/3 sm:max-w-5/6"
        opts={{
          dragFree: true,
          loop: true,
          startIndex: 1,
        }}
      >
        <CarouselContent>
          {projectData.map((item, index) => (
            <CarouselItem key={index} className="basis-1/1 xl:basis-1/3">
              <div className="p-1">
                <Card className="text-backgroundthree h-[550px]">
                  <CardHeader className="">
                    {typeof item.image === "function" ? (
                      <item.image className="h-60 w-full object-contain" />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-60 w-full object-contain"
                      />
                    )}
                    <div className="flex flex-row justify-between">
                      <CardTitle className="text-left text-2xl">
                        {item.title}
                      </CardTitle>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon className="text-backgroundthree hover:text-primary ml-2 h-5 w-5 fill-current transition md:h-10 md:w-10" />
                      </a>
                    </div>
                    <CardDescription className="text-md text-start">
                      <div className="flex max-h-40 flex-col space-y-2 overflow-y-auto [-webkit-overflow-scrolling:touch] sm:max-h-none sm:overflow-visible">
                        <div>{item.description}</div>
                        <div>
                          <b>Technologies:</b>{" "}
                          {item.technologies?.join(" | ") || "N/A"}
                        </div>
                      </div>
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
