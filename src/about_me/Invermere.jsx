import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Invermere() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h3' component='h1' gutterBottom>
                    Rocky mountain playground
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    <i>Updated: August 2023</i>
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Entering the town of Invermere BC, for me, is a breath of fresh air and feeling the warmth of a lifetime
                    of beautiful memories - and sometimes 30+ degrees celsius.  My family spent all our summers in Invermere until I left for university
                    and we continue to spend as much time there as possible.  I also had my first job as an attendant at a boat
                    gas station on the lake! <br /><br />

                    A typical day will encompass coffee and
                    pancakes outside with friends and family, then on to the lake for a day of boating, an afternoon of
                    volleyball on the beach, and returning home for dinner and a campfire until the wee hours of the evening.
                    In the winter, replace boating with snowboarding and volleyball with a game of crib. Many of my friends
                    were made in Invermere and we always make sure to spend at least a weekend every year together making new
                    memories. <br /><br />

                    If you are interested in a beautiful vacation to interior BC, this is a shameless plug to visit Invermere.
                    Feel free to ask me for suggested activities and eats.
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <Box
                        component="img"
                        sx={{
                            width: '45%',
                            maxHeight: 250,
                            objectFit: 'contain'
                        }}
                        alt="Playing guitar."
                        src="./assets/images/invermere/guitar.JPG"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: '45%',
                            maxHeight: 250,
                            objectFit: 'contain'
                        }}
                        alt="Family."
                        src="./assets/images/invermere/family.JPG"
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    mt: 2
                }}>
                    <Box
                        component="img"
                        sx={{
                            width: '45%',
                            maxHeight: 250,
                            objectFit: 'contain'
                        }}
                        alt="Wakeboarding."
                        src="./assets/images/invermere/wakeboard.JPG"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: '45%',
                            maxHeight: 250,
                            objectFit: 'contain'
                        }}
                        alt="Wakesurfing."
                        src="./assets/images/invermere/surf.jpg"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 1: a small selection of photos from past summers at the lake.
                </Typography>
            </ThemeProvider>
        </Box>
    )
}