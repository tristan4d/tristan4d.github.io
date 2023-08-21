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
                        I am a transportation planning and engineering specialist creating transit tech solutions
                        to move people effectively and efficiently within their communitites.
                    </Typography>
                    <Typography variant='overline' gutterBottom>
                        <i>May the bus be with you.</i>
                    </Typography>
                    <Typography variant='overline' gutterBottom>
                        <Link href='https://github.com/tristan4d'><GitHubIcon /></Link>{' '}
                        <Link href='https://www.linkedin.com/in/tristan-ford-07087813b/'><LinkedInIcon /></Link>{' '}
                        <Link href='mailto:tjford@mail.ubc.ca'><AlternateEmailIcon /></Link>{' '}
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
                src="../assets/images/home/cover-image.JPG"
            />
        </Box>
    )
}