import { useState, memo } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ProjectCard from './ProjectCard';
import Project from './Project';
import MLRidershipModel from './MLRidershipModel';
import AvoidedGHGs from './AvoidedGHGs';
import MolecularBeam from './MolecularBeam';
import LRTSimulation from './LRTSimulation';
import RailyardSwitchSystem from './RailyardSwitchSystem';
import OptimizingTransit from './OptimizingTransit';
import ThesisPlaceholder from './ThesisPlaceholder';
import ODSurvey from './ODSurvey';
import TrafficFlow from './TrafficFlow';

const initialProjects = [
    {
        id: 0, cardVisibility: true, visibility: false,
        title: 'Optimizing Transit',
        image: './assets/images/optimizing-transit/cover-image.jpg',
        description: `
        Distilling automated passenger counter and automatic vehicle
        location data to optimize transit service.
        `,
        date: 'August 2023',
        component: <OptimizingTransit date='August 2023' />,
        tags: <Stack direction='row' spacing={1}>
            <Chip label='VBA' variant='outlined' size='small' color='info' />
            <Chip label='Data Analysis & Modeling' variant='outlined' size='small' color='info' />
        </Stack>
    },
    {
        id: 1, cardVisibility: true, visibility: false,
        title: 'Victoria Origin Destination',
        image: './assets/images/od-survey/cover-image.png',
        description: `
        Leveraging cell phone location data to align transit
        network design with travel demand.
        `,
        date: 'August 2023',
        component: <ODSurvey date='August 2023' />,
        tags: <Stack direction='row' spacing={1}>
            <Chip label='Python' variant='outlined' size='small' color='info' />
            <Chip label='Data Analysis & Modeling' variant='outlined' size='small' color='info' />
        </Stack>
    },
    {
        id: 2, cardVisibility: true, visibility: false,
        title: 'Avoided GHGs',
        image: './assets/images/avoided-ghgs/cover-image.jpg',
        description: `
        Analyzing fleet and ridership data to estimate greenhouse
        gas emissions avoided by using transit.
        `,
        date: 'May 2023',
        component: <AvoidedGHGs date='May 2023' />,
        tags: <Stack direction='row' spacing={1}>
            <Chip label='Python' size='small' variant='outlined' color='info' />
            <Chip label='Data Analysis & Modeling' variant='outlined' size='small' color='info' />
        </Stack>
    },
    {
        id: 3, cardVisibility: true, visibility: false,
        title: 'Traffic Flow Analysis',
        image: './assets/images/traffic-flow/cover-image.png',
        description: `
        Simulation of traffic flow vs. density macroscopic
        fundamental diagram.
        `,
        date: 'December 2022',
        component: <TrafficFlow date='December 2022' />,
        tags: <Stack direction='row' spacing={1}>
            <Chip label='Python' variant='outlined' size='small' color='info' />
            <Chip label='Data Analysis & Modeling' variant='outlined' size='small' color='info' />
        </Stack>
    },
    {
        id: 4, cardVisibility: true, visibility: false,
        title: 'ML Ridership Model',
        image: './assets/images/ai-ridership-model/cover-image.jpg',
        description: `
        Deep learning and multiple linear regression models to
        project future transit ridership.
        `,
        date: 'April 2022',
        component: <MLRidershipModel date='April 2022' />,
        tags: <Stack direction='row' spacing={1}>
            <Chip label='Python' variant='outlined' size='small' color='info' />
            <Chip label='Data Analysis & Modeling' variant='outlined' size='small' color='info' />
        </Stack>
    },
    {
        id: 5, cardVisibility: true, visibility: false,
        title: 'Railyard Switch System',
        image: './assets/images/railyard-switch-system/cover-image.jpg',
        description: `
        Development of an in-house track switching and control
        system for heavy and light railyards.
        `,
        date: 'January 2019',
        component: <RailyardSwitchSystem />,
        tags: <Stack direction='row' spacing={1}>
            <Chip label='Engineering' variant='outlined' size='small' color='info' />
            <Chip label='Safety' variant='outlined' size='small' color='info' />
        </Stack>
    },
    {
        id: 6, cardVisibility: true, visibility: false,
        title: 'LRT Simulation',
        image: './assets/images/lrt-simulation/cover-image.jpg',
        description: `
        MATLAB Simulink simulation developed to analyze impacts of
        signaling methods on vehicle flow.
        `,
        date: 'August 2018',
        component: <LRTSimulation />,
        tags: <Stack direction='row' spacing={1}>
            <Chip label='MATLAB' variant='outlined' size='small' color='info' />
            <Chip label='Modeling' variant='outlined' size='small' color='info' />
        </Stack>
    },
    {
        id: 7, cardVisibility: true, visibility: false,
        title: 'Molecular Beam',
        image: './assets/images/molecular-beam/cover-image.jpg',
        description: `
        Design and development of a molecular beam generator for multidimensional
        spectroscopy experiments.
        `,
        date: 'December 2017',
        component: <MolecularBeam />,
        tags: <Stack direction='row' spacing={1}>
            <Chip label='Math & Physics' variant='outlined' size='small' color='info' />
            <Chip label='Engineering' variant='outlined' size='small' color='info' />
        </Stack>
    },
    {
        id: 8, cardVisibility: true, visibility: false,
        title: 'Thesis Placeholder',
        image: './assets/images/thesis-placeholder/cover-image.jpg',
        description: `
        Coming soon.
        `,
        date: 'Ongoing',
        component: <ThesisPlaceholder date='Ongoing' />,
        tags: <Stack direction='row' spacing={1}>
            <Chip label='???' variant='outlined' size='small' color='info' />
        </Stack>
    }
];

function ProjectList({ min_500 }) {
    const [projects, setProjects] = useState(initialProjects);

    const viewProject = (id) => {
        window.scrollTo({ top: 0 })
        setProjects((currProjects) => {
            return currProjects.map(project => {
                if (project.id === id) {
                    return { ...project, cardVisibility: false, visibility: true };
                } else {
                    return { ...project, cardVisibility: false };
                }
            })
        })
    }

    const backToCards = () => {
        window.scrollTo({ top: 0 })
        setProjects(initialProjects);
    }

    return (
        <Container >
            <Grid container spacing={4}>
                {projects.map((project) => {
                    if (project.visibility) {
                        return <Project key={project.id} backToCards={backToCards} children={project.component} min_500={min_500} />
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
                        )
                    }
                })}
            </Grid>
        </Container>
    )
}

export default memo(ProjectList);