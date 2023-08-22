import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const withLink = (to, children) => <Link href={to}>{children}</Link>;

const actions = [
    {
        icon: withLink("https://www.linkedin.com/in/tristan-ford-07087813b/",
            <LinkedInIcon />),
        name: "LinkedIn"
    },
    {
        icon: withLink("https://github.com/tristan4d",
            <GitHubIcon />),
        name: "GitHub"
    },
    {
        icon: withLink("mailto:snapper.thinker-0o@icloud.com",
            <AlternateEmailIcon />),
        name: 'Email'
    },
];

export default function LinkDial() {
    return (
        <Box sx={{ position: 'fixed', top: 10, right: 10 }}>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                icon={<ShareIcon />}
                direction='down'
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}