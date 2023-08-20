import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ODSurvey({ date }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h1' gutterBottom>
                    Victoria Origin Destination
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    Tristan Ford <br />
                    <i>{date}</i>
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Background
                </Typography>
                <Typography variant='body1' gutterBottom>
                    BC Transit's guiding planning document for the Victoria Regional Transit System (VRTS) was completed
                    in 2011 and highlighted several key initiatives:

                    <ul>
                        <li>
                            Establishment of rapid transit lines between Langford, Downtown Victoria, Swartz Bay Ferry
                            Terminal, and the University of Victoria.
                        </li>
                        <li>
                            Complete the frequent transit network as shown in <Link href='#figure_1' underline='hover'>figure 1</Link>.
                        </li>
                        <li>
                            Invest in infrastructure priorities such as exchanges, park & rides and transit priority measures
                            along key corridors.
                        </li>
                    </ul>

                    While much of the work outlined in this report had been completed at the time of writing, we saw value in
                    reconfirming the proposed network design aligned with current travel patterns.  Many things can change over
                    10+ years and a pandemic!  This work would also help form the foundation for a revamp of the original document
                    to a modern context.
                </Typography><br />
                <Box
                    id='figure_1'
                    component="img"
                    sx={{
                        width: 600,
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="VRTS future transit network."
                    src="src/assets/images/od-survey/tfp-network.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 1: transit future network from the 2011 VRTS Transit Future Plan.
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Methodology
                </Typography>
                <Typography variant='body1' gutterBottom>
                    To perform the analysis, we wanted to assess travel patterns via origin-destination information.  Our
                    organization procured this data through <Link href='https://www.streetlightdata.com/' underline='hover'>StreetLight</Link> who
                    provide a powerful web platform with which I was able to assess travel patterns in Victoria.  This
                    tool refines cell phone location information into trips with identified modes, details and demographics. <br /><br />


                    The Capital Regional District, a local government district encompassing much of the southern tip
                    of Vancouver Island and the southern Gulf Islands, also produces a household travel survey for the
                    greater Victoria area.  At the time of writing, the most recent survey was completed for 2017 travel
                    patterns and the update for 2022 was in progress. <br /><br />

                    These two data sources provide a wealth of data and insights, but for the intent of this work I
                    focused on weekday average trips taken between the study regions as shown in <Link href='#figure_2' underline='hover'>figure 2</Link>.
                    For the remainder of this post, we will be considering average weekday data from 2017 and 2022.
                </Typography><br />
                <Box
                    id='figure_2'
                    component="img"
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="Study zones."
                    src="src/assets/images/od-survey/study-zones.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 2: study zones used in the StreetLight origin-destination analysis.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    2017 Baseline
                </Typography>
                <Typography variant='body1' gutterBottom>
                    A natural first step was to confirm agreement between the survey and cell phone location data from
                    2017.  <Link href='#figure_2' underline='hover'>Figure 3</Link> demonstrates some local discrepancies
                    between the cell phone data and the household travel survey, however communities range in size and
                    some ratios may be skewed by the lower total number of trips.  For example, if the survey counted
                    100 trips between two regions and StreetLight counted 200, the ratio is 2 even though this difference
                    could be attributed to rounding.  The average trips between any two zones from the survey was 3377
                    with a standard deviation of 8020, and for StreetLight it was 3607 and 8162 respectively. <br /><br />

                    Aggregated over the entire region, I found that StreetLight had 7% more trips than the household
                    travel survey, which indicated good agreement between the two data sources.
                </Typography>
                <Box
                    id='figure_3'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <Box
                        component="img"
                        sx={{
                            width: '50%'
                        }}
                        alt="2017 origins barplot."
                        src="src/assets/images/od-survey/2017-origin-barplot.png"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: '50%'
                        }}
                        alt="2017 destinations barplot."
                        src="src/assets/images/od-survey/2017-destination-barplot.png"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 3: 2017 - ratio of trips originating (left) / ending (right) in the specified zones from StreetLight
                    data compared with values from the survey.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    2017 vs. 2022 Comparison
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I then turned my attention to the differences between 2017 and 2022 and decided to compare the 2017
                    StreetLight data with the 2022 StreetLight data so that any local fluctuations would be maintained
                    and travel changes due to behaviors, instead of data sources, would emerge. <br /><br />

                    First I performed a zonal aggregation into three larger communities recognized in the greater Victoria
                    region:

                    <ul>
                        <li>
                            Core, which includes Downtown Victoria, Saanich, Oak Bay, Esquimalt and View Royal.
                        </li>
                        <li>
                            West Shore, which includes Langford, Colwood, Highlands and all regions to the west.
                        </li>
                        <li>
                            Peninsula, which includes Sidney, North Saanich and Central Saanich.
                        </li>
                    </ul>

                    Ratios and absolute values of the differences in travel between these regions can be seen in <Link href='#figure_4' underline='hover'>figure 4</Link>.
                    Overall, I found that travel demand across the region as a whole in 2022 was 87% of what it was in 2022.
                    We can see that the majority of the decrease appears to be from intra-zonal travel within the Core and
                    the Peninsula.
                </Typography>
                <Box
                    id='figure_4'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: '50%'
                            }}
                            alt="2022 vs. 2017 ratios."
                            src="src/assets/images/od-survey/ratio-heatmap.png"
                        />
                        <Box
                            component="img"
                            sx={{
                                maxWidth: '50%'
                            }}
                            alt="2022 vs. 2017 absolute values."
                            src="src/assets/images/od-survey/abs-heatmap.png"
                        />
                    </Box>
                    <Box
                        component="img"
                        sx={{
                            maxWidth: '100%'
                        }}
                        alt="2022 vs. 2017 all zones."
                        src="src/assets/images/od-survey/zone-heatmap.png"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 4: origin-destination heatmaps for the difference in trips between 2017 and 2022.  Origins are
                    on the vertical and destinations on the horizontal.
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Results
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Returning for a moment to compare our findings with the 2017 travel survey, in <Link href='#figure_5' underline='hover'>figure 5</Link>,
                    we can see the prominent differences in desire lines between the busiest regions.  There are several
                    interesting findings from the analysis thus far:

                    <ul>
                        <li>
                            The downtown core has experienced a significant decrease in travel demand.  The core is
                            the main employment and housing hub for the region.
                        </li>
                        <li>
                            Links between Langford, Saanich West, Saanich North, and Saanich East have seen modest
                            increases in travel desire.  These areas encompass several post-secondary institutions and
                            employment centers.
                        </li>
                        <li>
                            The demand patterns appear to support the existing rapid transit network design which
                            connects the West Shore, Peninsula and Saanich East regions via a central exchange
                            at Uptown which sits at the corner of Victoria North, Saanich West and Saanich East.
                        </li>
                    </ul>
                </Typography>
                <Box
                    id='figure_5'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <Box
                        component="img"
                        sx={{
                            maxWidth: '50%'
                        }}
                        alt="2017 survey desire lines."
                        src="src/assets/images/od-survey/survey-desire-map.png"
                    />
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Box
                            component="img"
                            sx={{
                                maxWidth: '50%'
                            }}
                            alt="2022 StreetLight desire lines north."
                            src="src/assets/images/od-survey/streetlight-desire-north.png"
                        />
                        <Box
                            component="img"
                            sx={{
                                maxWidth: '100%',
                                mt: 2
                            }}
                            alt="2022 StreetLight desire lines south."
                            src="src/assets/images/od-survey/streetlight-desire-south.png"
                        />
                    </Box>
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 5: desire lines from the 2017 household travel survey (left) and from the 2022 StreetLight
                    data (right).  Links with lower values are omitted for clarity.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Uptown Precinct
                </Typography>
                <Typography variant='body1' gutterBottom>
                    One of the key infrastructure projects for the region over the next decade is the establishment
                    of a major transit exchange in the Uptown area - highlighted in green in <Link href='#figure_6' underline='hover'>figure 6</Link>.
                    This exchange will serve as the transfer point between all rapid transit lines as well as many
                    frequent transit routes.  In the following, I filtered trips by those that passed through the
                    Uptown area to understand key origin-destination pairs that could connect at this node.<br /><br />

                    In <Link href='#fiure_6' underline='hover'>figure 6</Link>, we can see the majority of the trips
                    passing through this node are between Langford and Victoria / Saanich East.  This supports
                    the design of the rapid transit network as shown in <Link href='#figure_1' underline='hover'>figure 1</Link>.
                    Folks can easily travel between the West Shore and the Core with the Langford-Downtown rapid
                    transit line.  Langford to Saanich east travellers will need to transfer to the Uptown-UVic
                    rapid transit line or utilize one of several frequent transit routes. There is also strong
                    desire between Victoria and Saanich North which is supported by the
                    planned Peninsula rapid transit line that also provides direct service to Swartz Bay Ferry
                    Terminal, a key destination for the region.
                </Typography><br />
                <Box
                    id='figure_6'
                    component="img"
                    sx={{
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="2022 desire through Uptown."
                    src="src/assets/images/od-survey/streetlight-desire-uptown.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 6: 2022 top 5 desire lines passing through the Uptown precinct, which is highlighted in green.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Saanich East
                </Typography>
                <Typography variant='body1' gutterBottom>
                    You may have noticed, in <Link href='#figure_4' underline='hover'>figure 4</Link>, Saanich East-Saanich
                    East saw a relatively large increase in travel demand between 2017 and 2022.  What is going
                    on there?  In <Link href='#figure_7' underline='hover'>figure 7</Link>, I have broken this
                    zone into its census tracts to investigate the travel patterns in more detail. <br /><br />

                    We can see the bottom left and central census tracts emerge as key nodes for travel in the region.
                    The bottom left corresponds to the Uptown precinct while the center node contains the University
                    of Victoria.  We also see desire lines extending to zones bordering on McKenzie Avenue (highlighted
                    in purple) which is
                    the proposed alignment for the Uptown-UVic rapid transit line.  Overall, increased travel within
                    Saanich East appears to support the existing design of the rapid transit network. <br /><br />

                    <i>
                        Note: the larger desire line on the right of <Link href='#figure_7' underline='hover'>figure 7</Link> can
                        be attributed to the University of Victoria being split across adjacent census tracts.  There is likely
                        a large amount of traffic between these zones as a result of this split.
                    </i>
                </Typography><br />
                <Box
                    id='figure_7'
                    component="img"
                    sx={{
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="2022 desire in Saanich East."
                    src="src/assets/images/od-survey/streetlight-desire-saanich-east.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 7: 2022 largest desire lines between Saanich East census tracts.  McKenzie Avenue is highlighted in
                    purple.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Peninsula
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Lastly, to confirm the design of the Peninsula rapid transit line which will extend from Uptown to
                    Swartz Bay, we review desire to Central and North Saanich census tracts.  Despite travel demand
                    suggesting a descrease in intra-zonal travel within the Peninsula between 2017 and 2022, the
                    largest desire lines that emerge remain within the Peninsula itself.  The one exception being Saanich
                    East which shows strong connections with Keating Crossroad, Sidney and North Saanich. <br /><br />

                    These travel patterns also support the existing Peninsula rapid transit design which will run
                    north-south between Uptown and Swartz Bay at the northern tip of the Peninsula.  The rapid route
                    will connect Saanich East, Central Saanich, Sidney, and North Saanich.  <Link href='#figure_8' underline='hover'>Figure 8</Link> also
                    suggests an emerging trend with Keating Crossroad (in the center of the image) as a central node
                    for the region.  It would be worth reviewing the frequent and local transit networks to support
                    this behavior.
                </Typography><br />
                <Box
                    id='figure_8'
                    component="img"
                    sx={{
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="2022 desire on the Peninsula."
                    src="src/assets/images/od-survey/streetlight-desire-peninsula.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 8: 2022 largest desire lines to / from the Peninsula.
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Conclusion
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I was happy to report that the existing rapid transit network design did not require significant
                    rework for the modern context.  However, I was largely focused on the 'top 10' or 'top 5' links
                    between very large zones in the Victoria Region.  Even in these analyses, such as the Peninsula
                    assessment, we saw local patterns that may warrant further investigation to ensure local transit
                    is supportive.  As public agencies are well aware, it is difficult to make drastic changes to a
                    transit network as people have sometimes made very important decisions, such as where to live,
                    based on the presence of a transit line.  Removing or modifying any route requires due dilligence
                    in the form of public engagement and working with local governments. <br /><br />

                    I would recommend extending this work to more detailed contexts such as neighborhoods and specific
                    corridors to inform local transit network design.  This work could also support public engagement
                    efforts and inform folks about why any changes are recommended. <br /><br />

                    Furthermore, tools such as StreetLight provide demographic information which could be leveraged
                    to support GBA+ analysis and making equitable transit improvements.  As an example, I have created
                    some plots in <Link href='#figure_9' underline='hover'>figure 9</Link> which demonstrate the percentage of trips orginating and ending in each zone by
                    ethnicity (excluding white to emphasize the breakdown for non-white ethnicities) and household
                    income.  Information such as this could suggest areas in which to prioritize service and
                    infrastructure investment.
                </Typography><br />
                <Box
                    id='figure_9'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <Box
                        component="img"
                        sx={{
                            maxWidth: '50%',
                            p: 1
                        }}
                        alt="Percent of origins by ethnicity."
                        src="src/assets/images/od-survey/ethnicity-origin.png"
                    />
                    <Box
                        component="img"
                        sx={{
                            maxWidth: '50%',
                            p: 1
                        }}
                        alt="Percent of destinations by ethnicity."
                        src="src/assets/images/od-survey/ethnicity-destination.png"
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                    <Box
                        component="img"
                        sx={{
                            maxWidth: '50%',
                            p: 1
                        }}
                        alt="Percent of origins by income."
                        src="src/assets/images/od-survey/income-origin.png"
                    />
                    <Box
                        component="img"
                        sx={{
                            maxWidth: '50%',
                            p: 1
                        }}
                        alt="Percent of destinations by income."
                        src="src/assets/images/od-survey/income-destination.png"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 9: percentage of trips originating and ending in each zone by ethnicity (top) and household
                    income (bottom).
                </Typography>
            </ThemeProvider>
        </Box>
    )
}

export default memo(ODSurvey);