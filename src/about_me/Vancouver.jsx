import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Vancouver() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h3' component='h1' gutterBottom>
                    Vancouver, BC
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    <i>Updated: August 2023</i>
                </Typography>
                <Typography variant='h4' component='h1' gutterBottom>
                    Take 1: the more you know, the less you know
                </Typography>
                <Typography variant='body1' gutterBottom>
                    UBC, and more generally British Columbia, quickly became my home.  I was inspired by my
                    friends and classmates as well as the breathtaking beauty of the province.  Being able to
                    walk to the beach between classes did not hurt, either!
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
                        alt="Storm the wall."
                        src="./assets/images/vancouver/storm-the-wall.JPG"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: '45%',
                            maxHeight: 250,
                            objectFit: 'contain'
                        }}
                        alt="Thunderbird game."
                        src="./assets/images/vancouver/thunderbird.JPG"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 1: (left) storming the wall! (right) Homecoming Thunderbirds football game.
                </Typography><br />
                <Typography variant='body1' gutterBottom>
                    While there was a lot of fun and games, there was equally (or more) late night study sessions
                    and time spent in coffee shops working on problem sets.  I believe a friend and I may be the
                    sole reason why a certain coffee shop placed 'please limit your stay to 2 hours or less' cards
                    on their tables.  We spent over 8 hours each day on a long weekend in their space working
                    through a computer science assignment. <br /><br />

                    The engineering physics program is arduous.  Semesters were chalk full of engineering, math
                    and physics courses, sometimes as many as nine at a time!  It may sound insane, but
                    this was truly my element.  I thrive when learning new complex topics and applying
                    them to real problems.  The more I learned however, as the title of this section
                    suggests, showed me how little I truly knew about each topic and I hungered for more. <br /><br />

                    I was fortunate to complete three co-op work placements throughout my degree as well.  The
                    first was with <Link href='https://generalfusion.com/'>General Fusion</Link> in Burnaby, BC,
                    where I worked as a technician helping to build and test massive plasma injectors.  The second was as a
                    research assistant for the physical chemistry department at the Julius-Maximilians-Universität
                    in Würzburg, Bavaria.  This was one of the most influential experiences of my life and I have
                    separate post dedicated to it!  The last was as an engineering co-op student with SNC-Lavalin
                    in their transportation division in Vancouver, BC.  I had amazing mentorship and colleagues
                    who showed me the brilliance and intricacies behind the public transit systems that so many,
                    including myself at the time, take for granted.  I became obsessed with optimizing and improving
                    transit so that folks around the world can have accessible and affordable options to move around
                    their region.
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
                        alt="Co-op 1."
                        src="./assets/images/vancouver/snc-1.JPG"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: '45%',
                            maxHeight: 250,
                            objectFit: 'contain'
                        }}
                        alt="Co-op 2."
                        src="./assets/images/vancouver/snc-2.JPG"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 2: (left) smiling next to safety-critical train control systems on the Canada Line. (right)
                    We also had some fun!  Colleagues and I at the Corporate Challenge Canada Summer Games.
                </Typography><br />
                <Typography variant='body1' gutterBottom>
                    Much like the title of this section, I continue to expand my knowledge in all aspects of public transit
                    from planning to engineering and marvel at how much their is still to learn.  In the same vein, I
                    will be returning to UBC to pursue a masters of applied science in transportation engineering in
                    September 2023. <br /><br />

                    Thankfully, I was also able to continue playing hockey with the engineering intramural team and we
                    brought home first place in our second year.
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxHeight: 500,
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="Engineering hockey team."
                    src="./assets/images/vancouver/hockey-3.JPG"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', maxWidth: 800 }}>
                    Figure 3: first place, representing the Cairn!
                </Typography>
                <Typography variant='h4' component='h1' gutterBottom>
                    Take 2: starting my career
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I took my first job out of university with SNC-Lavalin, with whom I had completed my most recent co-op
                    term.  Excited to start making a real difference in the engineering world, I got to work on some very
                    cool projects from improving the public address system across all SkyTrain stations in Vancouver to
                    designing heavy rail switch control logic for Canadian Pacific.  I gained even more of an appreciation
                    for the scale and difficulty of building major infrastructure projects.  Even more difficult are
                    brownfield projects such as upgrading or renovating existing complex systems.  It was wonderful and
                    solidified my passion for public transportation.  I also managed to capture some awesome photos such
                    as the one below from a graveyard shift testing train control systems on the Canada Line.
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxHeight: 500,
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="The night shift."
                    src="./assets/images/vancouver/night-shift.JPG"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', maxWidth: 800 }}>
                    Figure 4: Canada Line SkyTrain station during off-hours.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Vancouver is also special to me as it is where I met my lovely partner.  We lived together for several
                    years in the city and enjoyed everything British Columbia has to offer.  Eventually, we wanted to be
                    closer to family and moved to Victoria which required me to leave SNC-Lavalin and take on a new challenge.
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxHeight: 500,
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="My partner and I."
                    src="./assets/images/vancouver/partner-1.JPG"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', maxWidth: 800 }}>
                    Figure 5: my partner and I enjoying a sunflower maze.
                </Typography>
                <Typography variant='h4' component='h1' gutterBottom>
                    Take 3: masters degree
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Coming soon...
                </Typography>
            </ThemeProvider>
        </Box>
    )
}