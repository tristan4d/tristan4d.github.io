import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Calgary() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h3' component='h1' gutterBottom>
                    Growing up in rural Alberta
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    <i>Updated: August 2023</i>
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I grew up near Calgary, Alberta in the prairies where I developed a passion for hockey
                    at a young age.  Passion turned to serious commitment and much of my grade-school
                    years were dedicated to early morning training sessions, practice after school
                    and countless weekend road trips for tournaments internationally.  I was lucky
                    to play with some amazingly talented players and made life-long friends.  Alas,
                    I was not bound for the NHL, though I was lucky enough to play with many current
                    NHL-ers and Stanley Cup winners, one of whom is pictured below!  Can you tell who
                    it is?
                </Typography><br />
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
                        alt="Hockey picture 1."
                        src="./assets/images/calgary/hockey-1.jpeg"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: '45%',
                            maxHeight: 250,
                            objectFit: 'contain'
                        }}
                        alt="Hockey picture 2."
                        src="./assets/images/calgary/hockey-2.JPG"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 1: (left) tournament winners!  I am left of the trophy with long hair looking away from the camera.
                    (right) Further along in my hockey career, playing AAA for Northwest Calgary.
                </Typography><br />
                <Typography variant='body1' gutterBottom>
                    Hockey taught me discipline, hard work and most importantly how to navigate uncomfortable situations
                    and work with difficult people. <br /><br />

                    Somewhere throughout high school I began to fall in love with math and physics.  I was fortunate to be
                    awarded for highest marks in math-30, pre-calculus and chemistry-30.  I lost physics-30 by 1 percent
                    and still have not gotten over it.  Nevertheless,  I decided to hang up the skates and left home after
                    graduation to attend the University of British Columbia, where I was accepted into their engineering
                    physics program.
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxHeight: 600,
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="Graduation."
                    src="./assets/images/calgary/graduation.JPG"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 2: 2014 high school graduation with some great friends.
                </Typography>
            </ThemeProvider>
        </Box>
    )
}