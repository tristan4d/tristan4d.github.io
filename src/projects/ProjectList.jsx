import { useState, memo } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ProjectCard from "./ProjectCard";
import Project from "./Project";
import MLRidershipModel from "./MLRidershipModel";
import AvoidedGHGs from "./AvoidedGHGs";
import PDFView from "./PDFView";
import OptimizingTransit from "./OptimizingTransit";
import ODSurvey from "./ODSurvey";

import molecular_beam from "../../public/assets/molecular-beam-manual.pdf";
import lrt_simulation from "../../public/assets/lrt-simulation.pdf";
import railyard_switch from "../../public/assets/railyard-switch-system.pdf";
import traffic_flow from "../../public/assets/traffic-flow.pdf";
import mobility_safety from "../../public/assets/big-data-mobility-safety.pdf";
import av_weather from "../../public/assets/av-adverse-weather.pdf";
import vott from "../../public/assets/value-of-travel-time.pdf";
import bike_parking_rates from "../../public/assets/bike-parking-rates.pdf";
import interim_thesis_report from "../../public/assets/interim-thesis-report.pdf";

const initialProjects = [
  {
    id: 0,
    cardVisibility: true,
    visibility: false,
    title: "Interim Thesis Report",
    image: "./assets/images/interim-thesis-report/cover-image.png",
    description: `
        Investigating propagated delays in transit networks through
        mixed integer linear programming.
        `,
    date: "Ongoing",
    component: <PDFView file={interim_thesis_report} />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip label="Julia" variant="outlined" size="small" color="info" />
        <Chip
          label="Optimization"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 1,
    cardVisibility: true,
    visibility: false,
    title: "Bike Parking Rates",
    image: "./assets/images/bike-parking-rates/cover-image.png",
    description: `
          Quantitative assessment of bike parking rates and bike
          parking techbologies in Richmond, BC.
          `,
    date: "April 2024",
    component: <PDFView file={bike_parking_rates} />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip label="Julia" variant="outlined" size="small" color="info" />
        <Chip
          label="Data Analysis & Modeling"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 2,
    cardVisibility: true,
    visibility: false,
    title: "Mobility and Safety",
    image: "./assets/images/big-data-mobility-safety/cover-image.png",
    description: `
            Assessing how big data can improve both mobility and
            safety via public transit.
            `,
    date: "December 2023",
    component: <PDFView file={mobility_safety} />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip
          label="Math & Physics"
          variant="outlined"
          size="small"
          color="info"
        />
        <Chip
          label="Data Analysis & Modeling"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 3,
    cardVisibility: true,
    visibility: false,
    title: "Navigating Inclimate Weather",
    image: "./assets/images/av-adverse-weather/cover-image.jpg",
    description: `
            Summary of challenges and solutions for autonomous
            vehicles navigating adverse weather conditions.
            `,
    date: "December 2023",
    component: <PDFView file={av_weather} />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip
          label="Machine Learning"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 4,
    cardVisibility: true,
    visibility: false,
    title: "Value of Travel Time",
    image: "./assets/images/vott/cover-image.jpg",
    description: `
          Summary and case study demonstrating effects of the value
          of travel time.
          `,
    date: "December 2023",
    component: <PDFView file={vott} />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip
          label="Math & Physics"
          variant="outlined"
          size="small"
          color="info"
        />
        <Chip
          label="Data Analysis & Modeling"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 5,
    cardVisibility: true,
    visibility: false,
    title: "Optimizing Transit",
    image: "./assets/images/optimizing-transit/cover-image.jpg",
    description: `
        Distilling automated passenger counter and automatic vehicle
        location data to optimize transit service.
        `,
    date: "August 2023",
    component: <OptimizingTransit date="August 2023" />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip label="VBA" variant="outlined" size="small" color="info" />
        <Chip
          label="Data Analysis & Modeling"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 6,
    cardVisibility: true,
    visibility: false,
    title: "Victoria Origin Destination",
    image: "./assets/images/od-survey/cover-image.png",
    description: `
        Leveraging cell phone location data to align transit
        network design with travel demand.
        `,
    date: "August 2023",
    component: <ODSurvey date="August 2023" />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip label="Python" variant="outlined" size="small" color="info" />
        <Chip
          label="Data Analysis & Modeling"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 7,
    cardVisibility: true,
    visibility: false,
    title: "Avoided GHGs",
    image: "./assets/images/avoided-ghgs/cover-image.jpg",
    description: `
        Analyzing fleet and ridership data to estimate greenhouse
        gas emissions avoided by using transit.
        `,
    date: "May 2023",
    component: <AvoidedGHGs date="May 2023" />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip label="Python" size="small" variant="outlined" color="info" />
        <Chip
          label="Data Analysis & Modeling"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 8,
    cardVisibility: true,
    visibility: false,
    title: "ML Ridership Model",
    image: "./assets/images/ai-ridership-model/cover-image.jpg",
    description: `
        Deep learning and multiple linear regression models to
        project future transit ridership.
        `,
    date: "April 2022",
    component: <MLRidershipModel date="April 2022" />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip label="Python" variant="outlined" size="small" color="info" />
        <Chip
          label="Machine Learning"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 9,
    cardVisibility: true,
    visibility: false,
    title: "Traffic Flow Analysis",
    image: "./assets/images/traffic-flow/cover-image.png",
    description: `
        Simulation of traffic flow vs. density macroscopic
        fundamental diagram.
        `,
    date: "December 2021",
    component: <PDFView file={traffic_flow} />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip label="Python" variant="outlined" size="small" color="info" />
        <Chip
          label="Data Analysis & Modeling"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
  {
    id: 10,
    cardVisibility: true,
    visibility: false,
    title: "Railyard Switch System",
    image: "./assets/images/railyard-switch-system/cover-image.jpg",
    description: `
        Development of an in-house track switching and control
        system for heavy and light railyards.
        `,
    date: "January 2019",
    component: <PDFView file={railyard_switch} />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip
          label="Engineering"
          variant="outlined"
          size="small"
          color="info"
        />
        <Chip label="Safety" variant="outlined" size="small" color="info" />
      </Stack>
    ),
  },
  {
    id: 11,
    cardVisibility: true,
    visibility: false,
    title: "LRT Simulation",
    image: "./assets/images/lrt-simulation/cover-image.jpg",
    description: `
        MATLAB Simulink simulation developed to analyze impacts of
        signaling methods on vehicle flow.
        `,
    date: "August 2018",
    component: <PDFView file={lrt_simulation} />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip label="MATLAB" variant="outlined" size="small" color="info" />
        <Chip label="Modeling" variant="outlined" size="small" color="info" />
      </Stack>
    ),
  },
  {
    id: 12,
    cardVisibility: true,
    visibility: false,
    title: "Molecular Beam",
    image: "./assets/images/molecular-beam/cover-image.jpg",
    description: `
        Design and development of a molecular beam generator for multidimensional
        spectroscopy experiments.
        `,
    date: "December 2017",
    component: <PDFView file={molecular_beam} />,
    tags: (
      <Stack direction="row" spacing={1}>
        <Chip
          label="Math & Physics"
          variant="outlined"
          size="small"
          color="info"
        />
        <Chip
          label="Engineering"
          variant="outlined"
          size="small"
          color="info"
        />
      </Stack>
    ),
  },
];

function ProjectList({ min_500 }) {
  const [projects, setProjects] = useState(initialProjects);

  const viewProject = (id) => {
    window.scrollTo({ top: 0 });
    setProjects((currProjects) => {
      return currProjects.map((project) => {
        if (project.id === id) {
          return { ...project, cardVisibility: false, visibility: true };
        } else {
          return { ...project, cardVisibility: false };
        }
      });
    });
  };

  const backToCards = () => {
    window.scrollTo({ top: 0 });
    setProjects(initialProjects);
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {projects.map((project) => {
          if (project.visibility) {
            return (
              <Project
                key={project.id}
                backToCards={backToCards}
                children={project.component}
                min_500={min_500}
              />
            );
          } else if (project.cardVisibility) {
            return (
              <Grid item key={project.id} xs={12} sm={6} md={4}>
                <ProjectCard
                  viewProject={() => viewProject(project.id)}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  date={project.date}
                  image={project.image}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </Container>
  );
}

export default memo(ProjectList);
