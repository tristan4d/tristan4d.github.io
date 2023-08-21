import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function MLRidershipModel({ date }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h1' gutterBottom>
                    ML Ridership Model
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    Tristan Ford <br />
                    <i>{date}</i>
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Background
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Due to varying conditions and changed travel behaviors following Covid-19, transit ridership continues to adapt.
                    The driving factor behind this work was the uncertainty to which ridership would recover following the pandemic.
                    Peer agencies had conducted similar assessments, with varying levels of complexity, which predicted ridership
                    would not return to pre-Covid levels. <br /><br />

                    BC Transit was interested in understanding:
                    <ul>
                        <li>Ridership levels that can be expected under various scenarios.</li>
                        <li>The percent recovery expected in the short- and medium-term for financial planning.</li>
                    </ul>

                    Our objective was to forecast transit ridership for the Victoria Regional Transit System, the largest transit network
                    operated by BC Transit, over three years.  This would help the organization plan for potential future scenarios and
                    provide guidance to our partners.  This analysis was conducted in early 2022.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Explanatory Variables
                </Typography>
                <Typography variant='body1' gutterBottom>
                    To capture both standard and extraordinary effects (due to Covid-19) on ridership, my team and I developed a list of
                    nearly 50 explanatory variables.  These data sets were sourced from various resources and a data scraping pipeline was
                    developed and run monthly to populate a master table. <br /><br />

                    The following categories were represented in the explanatory variables:
                    <ul>
                        <li>
                            <b>Restaurant Bookings</b> (<Link href="https://www.opentable.com/state-of-industry">OpenTable</Link>):
                            comparison of how many people dined in restaurants post-pandemic compared to pre-pandemic.
                            We used the data from Vancouver, as it was the closest geographically and culturally to Victoria.
                        </li>
                        <li>
                            <b>Gas Price</b> (Stats Canada): average gas price in cents per litre in Victoria.
                        </li>
                        <li>
                            <b>Covid Data</b> (<Link href='https://api.covid19tracker.ca/docs/1.0/overview'>Covid-19 Tracker Canada</Link>):
                            fatalities, hospitilization rates, vaccinations, and many other statistics compiled by the Covid-19 Tracker Canada project.
                        </li>
                        <li>
                            <b>Population</b> (<Link href='https://bcstats.shinyapps.io/popApp/'>BCStats</Link>): population aggregated
                            across multiple age ranges.
                        </li>
                        <li>
                            <b>Unemployment Rate</b> (Stats Canada): unemployment rates for ages 15 and older in Victoria.
                        </li>
                        <li>
                            <b>University Session</b> (<Link href='https://www.uvic.ca/calendar/dates/index.php'>UVic</Link>): academic semesters,
                            breaks and other important dates.
                        </li>
                        <li>
                            <b>High School Session</b> (Greater Victoria School District): grade school semesters, breaks and other important dates.
                        </li>
                        <li>
                            <b>Boardings</b> (BC Transit): automated passenger counter boardings on transit vehicles in the Victoria Regional Transit System.
                        </li>
                        <li>
                            <b>Revenue Hours</b> (BC Transit): planned revenue hours in the Victoria Regional Transit System.
                        </li>
                        <li>
                            <b>Weather</b> (<Link href='https://climate.weather.gc.ca/climate_data/daily_data_e.html?StationID=51337&amp;Prov=BC&amp;timeframe=2&amp;StartYear=1840&amp;EndYear=2022&amp;Day=17&amp;Year=2022&amp;Month=5'>Government of Canada</Link>):
                            mean temperature and snow/rain precipitation.
                        </li>
                        <li>
                            <b>Local Business Condition Index</b> (Stats Canada): a local business condition index was developed post-pandemic which tracks
                            business conditions in Victoria.
                        </li>
                        <li>
                            <b>Stat Holidays</b> (<Link href='https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays'>BC Government</Link>):
                            a dummy variable to indicate whether a stat holiday falls in a given week.
                        </li>
                    </ul>

                    Lastly, due to the limited availability of automated passenger counter data, we were only able to access data from 2019-2021 to support model
                    development.
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Methodology
                </Typography>
                <Typography variant='body1' gutterBottom>
                    The team developed two statistical learning models.  The first was a multiple linear regression model and the second was a deep learning model
                    for which I was responsible.  We wanted to apply multiple techniques as it is often useful to apply models of varying flexibility to understand
                    whether the underlying problem is inherently non-linear.  The project flow chart is outlined below in <Link href='#figure_1' underline='hover'>figure 1</Link>.
                </Typography>
                <Box
                    id='figure_1'
                    component="img"
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="Project methodology flow-chart."
                    src="./assets/images/ai-ridership-model/flow-chart.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 1: project flow chart.
                </Typography>
                <Typography variant='body1' gutterBottom>
                    <ol>
                        <li>
                            The explanatory variables were loaded into the model framework.
                        </li>
                        <li>
                            We performed a time-series cross validation with an expanding window splitter to select model parameters.
                        </li>
                        <li>Both models were then trained on the entire available dataset.</li>
                        <li>
                            1000 potential scenarios were generated per week for three years after the last date of existing data. Depending on the explanatory
                            variable, random sampling, linear models with noise, or fixed values were used (e.g. we know when universities will be on holiday).
                        </li>
                        <li>
                            The generated data was then passed through each model and the output was averaged for each week to generate future predictions.
                        </li>
                    </ol>
                </Typography>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box
                        component="img"
                        sx={{
                            width: '50%'
                        }}
                        alt="Explanatory variable plots."
                        src="./assets/images/ai-ridership-model/variable-plots.png"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: '50%'
                        }}
                        alt="Latin hypercube sampling output."
                        src="./assets/images/ai-ridership-model/lhs-output.jpg"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 2: (left) several explanatory variables plotted from 2019-2021.  (right) Predicted ridership for June 2022 from the multiple linear regression
                    model using the data generated from latin hypercube sampling.
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Results
                </Typography>
                <Typography variant='body1' gutterBottom>
                    As can be seen from <Link href="#figure_3" underline='hover'>figure 3</Link>, outputs from the multiple linear regression and neural network models exhibit different behavior.  The multiple linear
                    regression appears to follow seasonal trends more closely, while the deep learning model is smoother.  They do both, however, have similar total boardings
                    over each projected year. <br /><br />

                    Furthermore, as I developed the neural network model I wanted to incorporate several scenarios which can be seen in the bottom of figure 3.  The scenarios
                    are a combination of whether pandemic conditions are present (pre- vs. post-covid) and whether expansion funding of 20,000 revenue hours per year are to
                    be invested in the Victoria Regional Transit System (no vs. w/ expansion).  This helped to provide some bounds on expected ridership given different
                    evolving conditions. <br /><br />

                    Key takeaways:
                    <ul>
                        <li>
                            Expected transit ridership recovery is 80% and 85% of pre-pandemic levels by the end of 2022 and 2023, respectively.
                        </li>
                        <li>
                            The best case scenario sees transit ridership return to 93% of pre-pandemic levels by the end of 2024.
                        </li>
                    </ul>
                </Typography>
                <Box id='figure_3'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Box
                        component="img"
                        sx={{
                            width: 800,
                            maxWidth: '100%'
                        }}
                        alt="Multiple linear regression model output."
                        src="./assets/images/ai-ridership-model/ml-predictions.png"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: 800,
                            maxWidth: '100%'
                        }}
                        alt="Neural network model output."
                        src="./assets/images/ai-ridership-model/nn-predictions.png"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 3: (top) predictions from the multiple linear regression model.  (bottom) Predictions from the deep learning model. Shaded areas
                    indicate the region for which 50% of all scenarios for that week fall within.
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Conclusion
                </Typography>
                <Typography variant='body1' gutterBottom>
                    The model was received well by the senior leadership team at BC Transit and helped structure the approach for
                    funding applications to the provincial government throughout the more difficult years of the pandemic.  Between January and August 2023,
                    ridership has been ~85% of pre-pandemic levels which corresponds to the predictions from both our models. <br /><br />

                    Several interesting insights can be drawn from this analysis:
                    <ul>
                        <li>
                            With steady expansion funding, ridership is projected increase under pandemic or pre-pandemic conditions.
                        </li>
                        <li>
                            Without expansion funding, there is a gradual upward trend under pandemic conditions.
                        </li>
                        <li>
                            Without expansion funding, ridership appears to be stagnant under pre-pandemic conditions.
                        </li>
                        <li>
                            Seasonality, including school semesters and stat holidays, can be seen in both models and plays a key role in weekly ridership.
                        </li>
                    </ul>

                    In Victoria we have seen a gradual return to pre-pandemic activities and willingness to share space.  As a result, many of the explanatory
                    variables, such as restaurant bookings and hospitilization rates, are less and less relevant to projecting ridership.  This project was
                    successful in providing context and information to BC Transit throughout the pandemic and has since been archived.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Future Improvements
                </Typography>
                <Typography variant='body1' gutterBottom>
                    This project raised more questions and interest than it answered.  The following is a list of recommended extensions to this project.

                    <ol>
                        <li>
                            Revise the explanatory variables to include active vehicle licenses, tourism, traffic counts, third-party application data, parking costs,
                            electronic fare impacts, fares, on-time performance, and customer satisfaction rates among others.
                        </li>
                        <li>
                            Investigate alternate models, such as a lasso, to select and validate relevant explanatory variables.  Compare with previous model results.
                        </li>
                        <li>
                            Assess ridership impacts on a route-level to help guide planning efforts on a yearly basis, such as where to invest service hours.
                        </li>
                        <li>
                            Apply the project methodology to other transit systems.
                        </li>
                        <li>
                            Further exploratory data analysis to understand the key factors influencing ridership.  For example, a principal component analysis may
                            highlight that parking costs (if they are included in the explanatory variables) have a significant impact on transit ridership.  This
                            information could be shared with local municipalities to help promote transit.
                        </li>
                    </ol>
                </Typography>
            </ThemeProvider>
        </Box>
    )
}

export default memo(MLRidershipModel);