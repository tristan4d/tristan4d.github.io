import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function AvoidedGHGs({ date }) {
    const AELatex = '$AE=\\sum_{i=0}^{N}((EI\\cdot AL_i\\cdot MSF-FEB_i\\cdot EF_i)\\cdot TSD_i)$';
    const tag_1 = '$$\\tag{1}$$';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h1' gutterBottom>
                    Avoided Greenhouse Gas Emissions
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    Tristan Ford <br />
                    <i>{date}</i>
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Background
                </Typography>
                <Typography variant='body1' gutterBottom>
                    BC Transit currently reports out on total GHG emissions produced by operations as well as GHG
                    emissions per service hour (GHG Intensity), as key indicators for achieving sustainability goals.
                    While these values are relevant they do not fully quantify the positive impacts that transit has on
                    community GHG emissions. <br /><br />

                    Every passenger that rides transit is reducing a percentage of GHG emissions they would
                    otherwise generate with a personal vehicle. The amount of this reduction or 'avoided emissions' is
                    challenging to quantify but plays a critical role in describing the role of transit in provincial
                    sustainability targets. <br /><br />

                    Peer transit agencies are attempting to grasp the effect of avoided emissions on their overall GHG
                    emissions and for many it is still a work in progress with varying degrees of analysis.  The most
                    comprehensive calculations include impacts of mode shift, land use impacts and congestion
                    effects. This project looks to quantify aggregated Avoided GHG Emissions (Avoided Emissions)
                    across BC Transit systems. At this point only the impacts of mode shift at a system level are being
                    explored, supplemented with an additional interim excel tool to quantify the avoided emissions of
                    proposed new routes. These quantifications will aid in framing the positive aspects of transit with
                    respect to sustainability. <br /><br />

                    The purpose of this project is to demonstrate the value of transit service to the public and to local
                    operating partners. For initial rollout the output would be used for marketing and informational
                    purposes, but with additional time, resourcing and potential 3rd party review, confidence in the
                    outputs may reach the point of being able to support grant opportunities or feed into CleanBC
                    climate goals.
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Methodology
                </Typography>
                <Typography variant='body1' gutterBottom>
                    As shown in <Link href='#eq_1' underline='hover'>(1)</Link>, the project approach is to identify impacts of ridership mode shift
                    by quantifying the differential between GHG emissions of passenger vehicles and those of
                    providing bus service. To quantify this figure, PowerBI and Python scripts cross reference the fleet
                    fueling database with APC data. This model does not include land use or congestion impacts. <br /><br />

                    <div id='eq_1' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ paddingRight: '5px' }}>
                            <Latex>{AELatex}</Latex>
                        </div>
                        <Latex>{tag_1}</Latex>
                    </div><br />

                    Where:
                    <ol>
                        <li>
                            <Latex>$AE$</Latex> is avoided emissions (kg CO2e)
                        </li>
                        <li>
                            <Latex>$EI$</Latex> is emissions intensity of average passenger vehicle in BC (kg CO2e/km)
                        </li>
                        <li>
                            <Latex>$AL_i$</Latex> is average load of i'th trip (L/km)
                        </li>
                        <li>
                            <Latex>$MSF$</Latex> is mode shift factor (km/passenger km)
                        </li>
                        <li>
                            <Latex>$FEB_i$</Latex> is fuel economy of the bus on the i'th trip (L/km)
                        </li>
                        <li>
                            <Latex>$EF_i$</Latex> is emissions factor of bus fuel of the i'th trip (kg CO2E/L)
                        </li>
                        <li>
                            <Latex>$TSD_i$</Latex> is trip sampled distance of the i'th trip (km)
                        </li>
                    </ol>
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Limitations and Assumptions
                </Typography>
                <Typography variant='body1' gutterBottom>
                    <ol>
                        <li>
                            Due to APC data not having fleet-wide coverage (20-30% of trips are unsampled), fuel
                            types are interpolated for those trips without an associated vehicle ID. For Victoria, a fuel
                            type ratio provided by Fleet is used to split unsampled trip kilometers. For all other systems,
                            the majority bus fuel type in the system is assigned to the unsampled trips in those
                            communities.
                        </li>
                        <li>
                            As fleet data contains discrepancies at a daily granularity, all associated variables are
                            aggregated to a monthly level. Reporting will subsequently be at monthly or annual levels.
                        </li>
                        <li>
                            Currently assumes 100% mode shift for passengers.
                        </li>
                        <li>
                            Driving behaviour is assumed to be the same distance as the given bus route.
                        </li>
                        <li>
                            Non-revenue kilometers are not included in the calculation.
                        </li>
                    </ol>
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Results
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Initial results are promising, as shown in <Link href='#figure_1' underline='hover'>figure 1</Link>.
                    Across all assessed transit systems, from early 2023, a net benefit in terms of avoided emissions is realized.
                    The column in green provides an estimate using current fleet and fuel types, while the column in blue provides
                    an estimate should the entire fleet be converted to battery electric buses. <br /><br />

                    <i>
                        Note: these results are from exploratory data analytics and should be not referenced as true values
                        for avoided emissions in the transit systems listed.
                    </i>
                </Typography>
                <Box
                    id='figure_1'
                    component="img"
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="Avoided emissions results."
                    src="src/assets/images/avoided-ghgs/results.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', maxWidth: 800 }}>
                    Figure 1: estimated avoided GHG emissions tabulated for early 2023.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Future Improvements
                </Typography>
                <Typography variant='body1' gutterBottom>
                    There is ongoing interest in improving these estimates and the following is a list of potential future
                    improvements to this project:

                    <ol>
                        <li>
                            Incorporate congestion and land use effects in the estimation of avoided emissions.
                        </li>
                        <li>
                            Comprehensive traffic studies to quantify mode shift and travel behaviours compared to bus routing.
                        </li>
                        <li>
                            Improve fleet fuel data entry processes to provide improved granularity for the calculation.
                        </li>
                    </ol>
                </Typography>
            </ThemeProvider>
        </Box>
    )
}

export default memo(AvoidedGHGs);