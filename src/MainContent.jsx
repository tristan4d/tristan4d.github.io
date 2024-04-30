import { useState } from 'react';
import Box from '@mui/material/Box';
import CV from './cv/CV';
import TabPanel from './navigation/TabPanel';
import ProjectList from './projects/ProjectList';
import NavTabs from './navigation/NavTabs';
import AboutMeShort from './about_me/AboutMeShort';
import BusDriver from './bus_driver/BusDriver';
import Home from './home/Home';
import './MainContent.css';

export default function MainContent({ min_500 }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        window.scrollTo({ top: 0 })
        setValue(newValue);
    };

    const handleClick = () => {
        window.scrollTo({ top: 0 })
        setValue(0);
    }

    return (
        <div className='MainContent'>
            <Box sx={{ margin: '0 auto', p: 2, pb: 15 }}>
                <TabPanel value={value} index={0}>
                    <Home min_500={min_500} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CV />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ProjectList min_500={min_500} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {/* <AboutMe min_500={min_500} /> */}
                    <AboutMeShort min_500={min_500} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <BusDriver />
                </TabPanel>
            </Box>
            <NavTabs
                handleChange={handleChange}
                handleClick={handleClick}
                value={value}
                min_500={min_500}
            />
        </div >
    );
}