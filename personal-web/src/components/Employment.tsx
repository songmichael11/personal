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
    <div className="bg-backgroundtwo relative">
      <h1
        className="text-primary mt-5 scroll-mt-20 text-center text-3xl font-bold"
        id="experience"
      >
        Relevant Experience
      </h1>
      <div className="mx-10 text-start md:mx-40">
        <Timeline className="!text-primary !border-primary !border-l">
          <TimelineItem className="mb--5">
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">
                January 2026 - Present
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Full Stack Software Developer | HomeTap
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <ul className="list-disc pl-5">
                  <li>
                    Incoming Full Stack Software Developer Co-op for Spring 2026
                  </li>
                </ul>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="mb--5">
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">
                January 2025 - Present
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Project Lead & Software Developer | Sandbox Software Consultancy
                @ Northeastern
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <ul className="list-disc pl-5">
                  <li>
                    Lead a team of 10 developers and designers to create a co-op
                    review platform enabling 10,000+ Northeastern students to
                    view and submit reviews for co-op roles utilizing the T3
                    tech stack
                  </li>
                  <li>
                    Designed and implemented PostgreSQL schemas for role and
                    company requests using a Drizzle ORM with TypeScript and Zod
                    for validation, allowing users to request additional roles
                    and companies
                  </li>
                  <li>
                    Redesigned a suite of mobile-responsive React UI components
                    using TypeScript and Tailwind CSS to ensure full
                    functionality on all devices
                  </li>
                  <li>
                    Collaborate in a team of developers and designers while
                    utilizing weekly standups, code reviews, and a ticket board
                  </li>
                </ul>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="mb--5">
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">
                July 2025 - September 2025
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Data Analyst | Kaerwell Inc.
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <ul className="list-disc pl-5">
                  <li>
                    Implemented and tested automated market basket analysis
                    using PySpark's FP-Growth algorithm to automatically
                    recommend relevant products based on current shopping cart
                    state
                  </li>
                  <li>
                    Built an AWS Lambda-ready FP-Growth workflow leveraging
                    hashed, pickled files in S3 to reduce recommendation time
                    from ~100 milliseconds to &lt;1 millisecond each
                  </li>
                </ul>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="mb--5">
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">
                July 2024 - April 2025
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Data Analyst | Medtech Analytics
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <ul className="list-disc pl-5">
                  <li>
                    Architected a Python data pipeline with AWS Athena and S3
                    integration to ingest 50M+ data points, automating DDL
                    generation and execution for large-scale analysis of
                    Duchenne muscular dystrophy (DMD)
                  </li>
                  <li>
                    Developed Presto SQL queries to analyze 150M+ unique rows of
                    healthcare data, identifying common symptom patterns and
                    flagging 1,000+ misdiagnoses of Lambert-Eaton Myasthenic
                    Syndrome (LEMS)
                  </li>
                  <li>
                    Translated technical findings into clinical insights during
                    biweekly meetings with healthcare professionals
                  </li>
                </ul>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent className="mb--5">
              <TimelineTime className="!text-black/50">
                May 2023 - August 2023
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Research Assistant | National Institutes of Health
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <ul className="list-disc pl-5">
                  <li>
                    Conducted an independent research project applying molecular
                    fingerprinting algorithms and training regression models on
                    1,600+ drugs to predict half-lives from molecular structures
                    using Python, Pandas, NumPy, and Jupyter Notebooks
                  </li>
                  <li>
                    Communicated complex findings by writing a 5,000-word thesis
                    and presenting to an audience of 300+ while utilizing data
                    visualization libraries such as Matplotlib{" "}
                  </li>
                </ul>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="absolute bottom-0 left-1/2 h-[1px] w-7/8 -translate-x-1/2 transform bg-black/40" />
    </div>
  );
};
