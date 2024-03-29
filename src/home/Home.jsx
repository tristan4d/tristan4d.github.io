import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Home({ min_500 }) {

    return (
        <Box sx={{ display: 'flex', flexDirection: min_500 ? 'row' : 'column', alignItems: 'center', margin: '0 auto' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: min_500 ? '30vw' : '80vw', mr: min_500 ? 2 : 0 }}>
                <ThemeProvider theme={theme}>
                    <Typography variant='h4'>
                        Hi there!  My name is,
                    </Typography>
                    <Typography variant='h1' gutterBottom>
                        Tristan Ford
                    </Typography>
                    <Typography variant='body1' gutterBottom>
                        I am a machine learning and optimization specialist passionate about developing
                        solutions to efficiently transport people and goods across communities.
                    </Typography>
                    <Typography variant='overline' gutterBottom>
                        <i>May the bus be with you.</i>
                    </Typography>
                    <Typography variant='overline' gutterBottom>
                        <Link href='https://github.com/tristan4d'><GitHubIcon /></Link>{' '}
                        <Link href='https://www.linkedin.com/in/tristan-f-07087813b/'><LinkedInIcon /></Link>{' '}
                        <Link href='mailto:snapper.thinker-0o@icloud.com'><AlternateEmailIcon /></Link>{' '}
                    </Typography>
                </ThemeProvider>
            </Box>
            <Box
                component="img"
                sx={{
                    maxWidth: min_500 ? '40vw' : '80vw',
                    maxHeight: '80vh',
                    borderRadius: 2
                }}
                alt="Me on a boat."
                src="./assets/images/home/cover-image.JPG"
            />
        </Box>
    )
}