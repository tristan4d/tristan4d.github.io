import { useState } from 'react';
import Box from '@mui/material/Box';
import AboutMeMap from './AboutMeMap';
import AboutMeStepper from './AboutMeStepper';
import ShortBio from './ShortBio';
import 'leaflet/dist/leaflet.css'
import './AboutMe.css'

const locations = [
    {
        id: 0, lat: 51.037, lng: -114.0766,
        city: 'Calgary, AB',
        tooltip: 'My hometown.'
    },
    {
        id: 1, lat: 50.505, lng: -116.030,
        city: 'Invermere, BC',
        tooltip: 'My playground.'
    },
    {
        id: 2, lat: 49.265, lng: -123.249,
        city: 'Vancouver, BC',
        tooltip: 'Alma mater.'
    },
    {
        id: 3, lat: 49.790, lng: 9.945,
        city: 'Würzburg, Bavaria',
        tooltip: 'An amazing life experience.'
    },
    {
        id: 4, lat: 48.423, lng: -123.362,
        city: 'Victoria, BC',
        tooltip: 'Where I call home.'
    }
]

const center = [
    30.623, -47.719
]

export default function AboutMeShort({ min_500 }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNext = () => {
        setValue((prevValue) => prevValue + 1);
    };

    const handleBack = () => {
        setValue((prevValue) => prevValue - 1);
    };

    return (
        <div className='AboutMe' style={{ flexDirection: min_500 ? 'row' : 'column' }}>
            <div className='MapContent' >
                <AboutMeMap value={value} locations={locations} center={center} handleChange={handleChange} min_500={min_500} />
                <AboutMeStepper steps={locations.length} activeStep={value} handleNext={handleNext} handleBack={handleBack} />
            </div>
            <Box sx={{ width: min_500 ? '40vw' : '75vw', ml: min_500 ? 2 : 0 }}>
                <ShortBio />
            </Box>
        </div>
    )
}