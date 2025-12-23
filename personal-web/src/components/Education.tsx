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

export const Education: React.FC = () => {
  return (
    <div className="bg-backgroundtwo">
      <h1
        className="text-primary mt-5 scroll-mt-20 text-center text-3xl font-bold"
        id="experience"
      >
        Education
      </h1>
      <div className="my--5 mx-10 text-start md:mx-40">
        <Timeline>
          <TimelineItem className="mb--5">
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">
                September 2024 - Expected December 2027
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Northeastern University
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <span className="!text-black/50">
                  B.S. in Computer Science and Biology
                </span>
                <br />
                <b>GPA:</b> 3.97/4.0
                <br />
                <b>Relevant Coursework:</b> Object-Oriented Design | Database
                Design | Biostatistics | Fundamentals of Computer Science 1 & 2
                | Discrete Structures
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="mb--5">
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">
                September 2022 - May 2024
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Boston University
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <span className="!text-black/50">
                  Dual Enrollment, 48 Credit Hours
                </span>
                <br />
                <b>GPA:</b> 4.0/4.0
                <br />
                <b>Relevant Coursework:</b> Linear Algebra | Cell Biology |
                Genetics | Intro to Computer Science 1 & 2 | Intro to Biology 1
                & 2
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent className="mb--5">
              <TimelineTime className="!text-black/50">
                August 2020 - May 2024
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Boston University Academy
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <span className="!text-black/50">High School</span>
                <br />
                <b>GPA:</b> 3.9/4.0
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};
