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
        <Timeline>
          <TimelineItem className="mb--5">
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime className="!text-black/50">
                January 2025 - Present
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Software Developer | Sandbox Software Consultancy @ Northeastern
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <ul className="list-disc pl-5">
                  <li>
                    Developed key features in Cooper, a platform that enables
                    10,000+ Northeastern students to view and submit reviews for
                    co-op roles using the T3 tech stack
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
                July 2024 - Present
              </TimelineTime>
              <TimelineTitle className="!text-primary">
                Data Analyst | Medtech Analytics & Kaerwell
              </TimelineTitle>
              <TimelineBody className="!text-black">
                <ul className="list-disc pl-5">
                  <li>
                    Built a Python data pipeline with AWS Athena and S3
                    integration to ingest 50M+ data points at a time, automating
                    DDL generation and execution for large-scale analysis of
                    Duchenne muscular dystrophy (DMD)
                  </li>
                  <li>
                    Developed Presto SQL queries to analyze 150M+ unique
                    healthcare data points, identifying symptom patterns and
                    flagging 1,000+ misdiagnoses of Lambert-Eaton Myasthenic
                    Syndrome (LEMS)
                  </li>
                  <li>
                    Met biweekly with a team of medical professionals to present
                    findings to a non-technical audience and refine analyses
                    using medicine-driven reasoning
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
