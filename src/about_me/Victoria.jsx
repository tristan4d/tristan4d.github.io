import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Victoria() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h3' component='h1' gutterBottom>
                    What a rescue!
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    <i>Updated: August 2023</i>
                </Typography>
                <Typography variant='body1' gutterBottom>
                    My partner and I moved into our place in the summer of 2021 and lived a stone's throw away
                    from family, friends, the beach, and coffee shops galore.  We loved the city and all the
                    culture and character that Victoria has to offer.  I was lucky to accept a position with
                    BC Transit and quickly became an advocate for island transportation.  Those folks know their
                    systems and I continue to be inspired by their dedication running all the small, medium and
                    large networks throughout BC. <br /><br />

                    The biggest and best change to our lives, however, was adopting a beautiful rescue from Mexico.
                    He continues to be the most loving, happy and sometimes spoiled boy we could have asked for.  It's
                    hard to imagine that life happened before him.  Typical dog parents, we think our dog is
                    a gift to the world and we are one hundred percent correct.
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="My family."
                    src="src/assets/images/victoria/family.JPG"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 1: My favourite people.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I had so many amazing experiences, personally and through work, travelling Vancouver island.
                    Many of my favourite projects are highlighted in the projects tab - please take a look if you
                    are interested!  Outside of work, my family and I travelled to breathtaking locations from the
                    bottom of Vancouver Island all the way to Desolation Sound. <br /><br />

                    Throughout my work with BC Transit, I continued to gravitate towards the analytical projects
                    that I often completed off the side of my desk.  Day-to-day tasks took a majority of my time, so I had to
                    find any opportunity to work on innovative projects which continued to kindle my passion for
                    transit network optimization.  Eventually, I began to get so involved in these side projects
                    that I decided it may be worth pursuing a masters and focusing full time on a research thesis.
                    That way I could expand my knowledge and pour my effort into the types of projects I am most
                    interested in.  So I applied and the next thing I knew I was heading back to UBC in Vancouver
                    to begin my masters of applied science in transportation engineering.
                </Typography>
            </ThemeProvider>
        </Box>
    )
}