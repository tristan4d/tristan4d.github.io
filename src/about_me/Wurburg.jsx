import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function Wurzburg() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h3' component='h1' gutterBottom>
                    Embracing change
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    <i>Updated: August 2023</i>
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I accepted an 8-month co-op position with the physical chemistry department at the Julius-Maximilians-Universität
                    in Würzburg, Bavaria.  In the past, I had moved from my hometown of Calgary to Vancouver to attend university but
                    I was surely not prepared for the gravity of moving to a different continent.  I began feeling nerves and a general
                    sense of unease as I said my goodbyes to friends and moved all my unnecessary belongings into storage.
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="View of Würzburg."
                    src="src/assets/images/wurzburg/cover-image.JPG"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 1: view of Würzburg from the Marienberg Fortress.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    When I finally arrived in the beautiful city of Würzburg, I stayed in a youth hostel with some other UBC students
                    who were also on co-op terms.  One by one, we began heading off to our accommodations and I had arranged to live
                    in a small university residence near the edge of town.  It was roughly an hour by transit or an hour walking
                    to get between my residence and the university and we were in a fairly remote part of town next to gorgeous
                    countryside. <br /><br />
                    
                    Unfortunately, the first two weeks were not easy for me.  I had not met any friends as it appeared
                    that everyone only spoke German in my residence and I was too far from the other UBC students to meet regularly.
                    I spoke with my mom on the phone every day after work for those two weeks until one day I saw a group of students
                    playing volleyball on the court between some of the residence buildings.  I decided to take a chance and ask to
                    join and from that moment on my mom heard from me significantly less - though I did make sure to talk to her once
                    per week!  In the image below, you can see some of the wonderful friends I made sitting near the river enjoying
                    some local pizza.
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="Friends by the river."
                    src="src/assets/images/wurzburg/river.JPG"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 2: enjoying great company by the river in Würzburg.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    The commute was a long one, as I mentioned, but I began to enjoy the trip as I could listen to music and organize
                    my day before arriving to work.  I had not been an avid transit user in the past and I attribute my initial
                    interest in the industry to this experience.  The buses and trams were efficient and well maintained and I
                    did not think twice about using any other mode of transportation.  I also became a consistent user of the overnight
                    buses for travelling on the weekend and am now well equipped to fall asleep in just about any environment. <br /><br />


                    I was also lucky to have wonderful colleagues in the department of physical chemistry.  Not only were
                    they extremely intelligent and great academic mentors, but also introduced me to local culture and events.  In
                    the image below you can see our department's football team.  We played in a short league against the other
                    groups at the university.  We were not victorious but we definitely had spirit. <br /><br />

                    <i>Note: you can read about the molecular beam injector I designed as part of my co-op on the projects tab!</i>
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="Football team."
                    src="src/assets/images/wurzburg/soccer.JPG"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 3: the physical chemistry department's football team.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Lastly, I made it my mission to travel as much as possible and was successful in visiting a new city every second
                    weekend.  I travelled to every neighboring country to Germany as well as many further beyond.  As a whole, this
                    experience was one I look back on with extreme fondness.  Not only for the amazing memories and friends I made
                    along the way, but because I learned a very valuable lesson.  I now look at scary new challenges with a nervousness
                    born from excitement rather than anxiety.  I have taken on enough large changes, including this one, in my life and
                    emerged on the other side better for it that I am confident in saying 'all change is good change.'
                </Typography><br />
                <Box
                    component="img"
                    sx={{
                        maxWidth: '90%',
                        alignSelf: 'center'
                    }}
                    alt="Prague."
                    src="src/assets/images/wurzburg/prague.JPG"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 4: 5 am in Prague.
                </Typography>
            </ThemeProvider>
        </Box>
    )
}