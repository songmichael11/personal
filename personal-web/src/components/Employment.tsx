import React from "react";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

export const Employment: React.FC = () => {
  return (
    <div className="bg-backgroundtwo">
      <h1 className="text-primary my-5 text-center text-3xl font-bold">
        Relevant Experience
      </h1>
      <div className="mx-40 text-start">
        <Timeline>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">
                February 2022
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Application UI code in Tailwind CSS
              </TimelineTitle>
              <TimelineBody className="!text-black">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
                <br />
                <br />
                The code is written in React and TypeScript, and it is fully
                responsive, accessible, and SEO-friendly.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">March 2022</TimelineTime>
              <TimelineTitle className="!text-primary">
                Marketing UI design in Figma
              </TimelineTitle>
              <TimelineBody className="!text-black">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
                <br />
                <br />
                The code is written in React and TypeScript, and it is fully
                responsive, accessible, and SEO-friendly.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">April 2022</TimelineTime>
              <TimelineTitle className="!text-primary">
                E-Commerce UI code in Tailwind CSS
              </TimelineTitle>
              <TimelineBody className="!text-black">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
                <br />
                <br />
                The code is written in React and TypeScript, and it is fully
                responsive, accessible, and SEO-friendly.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};
