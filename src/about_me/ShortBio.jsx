import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ShortBio() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h3' component='h1' gutterBottom>
                    About Me
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    <i>Updated: December 2023</i>
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Fortunately, I am not only interested in transportation innovation.  I am happy to 
                    to have many hobbies that keep me active and engaged outside of work hours such as
                    going to the gym and playing hockey.  Learning new areas of math and personal projects
                    also take up a significant portion of my free time! <br /><br />

                    I try to say "yes" to opportunities and I have found this attitude towards life is often
                    extremely rewarding.  It has lead me to take on many challenges such as living abroad or
                    working on difficult problems and I am always better off because of it.  The map to the
                    left features some locations where this has brought me.  This philosophy
                    is part of everything I do, both in my professional and personal life. <br /><br />

                    "Why transit," you may ask.  I answer, because it is a critical component to making our
                    cities accessible, green and safe.  There are countless benefits and opportunities to make
                    transportation better in our urban areas and I am dedicated to finding them. <br /><br />

                    Lastly, see a picture below for what really makes me tick!
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="My family."
                    src="./assets/images/victoria/family.jpg"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 1: My favourite people.
                </Typography>
            </ThemeProvider>
        </Box>
    )
}