import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AvatarButton from './AvatarButton';
import Copyright from './Copyright';

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
}

export default function NavTabs({ handleClick, handleChange, value, min_500 }) {

    return (
        <Box
            sx={{
                backgroundColor: '#cfd8dc',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                position: 'fixed',
                bottom: 0
            }}
        >
            <AvatarButton onClick={handleClick} />
            <Box sx={{
                maxWidth: '70vw',
                borderTop: min_500 ? 1 : 0,
                borderLeft: min_500 ? 0 : 1,
                borderColor: 'slategrey',
                mx: 3
            }}>
                <Tabs
                    sx={{
                        height: 80,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    orientation={min_500 ? 'horizontal' : 'vertical'}
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    aria-label="navigation tabs"
                >
                    <Tab sx={{ color: 'slategrey', flex: '1 1 20%' }} label="Home" {...a11yProps(0)} />
                    <Tab sx={{ color: 'slategrey', flex: '1 1 20%' }} label="CV" {...a11yProps(1)} />
                    <Tab sx={{ color: 'slategrey', flex: '1 1 20%' }} label="Projects" {...a11yProps(2)} />
                    <Tab sx={{ color: 'slategrey', flex: '1 1 20%' }} label="About Me" {...a11yProps(3)} />
                    <Tab sx={{ color: 'slategrey', flex: '1 1 20%' }} label="Bus Driver" {...a11yProps(4)} />
                </Tabs>
                <Copyright />
            </Box>
        </Box >
    )
}