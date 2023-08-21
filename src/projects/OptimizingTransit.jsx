import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import DataTable from './DataTable';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function createData(route, date, block, trip_time, bus_no, stop_id, stop, stop_seq, timing_point, veh_stop, sch_time, arr_time, dep_time, on, off, leave_load, whlchr_evt, sch_runtime, runtime, dwell) {
    return {
        'Route': route,
        'Date': date,
        'Block': block,
        'Trip Time': trip_time,
        'Bus No.': bus_no,
        'Stop ID': stop_id,
        'Stop': stop,
        'Stop Seq.': stop_seq,
        'Timing Point': timing_point,
        'Veh. Stop': veh_stop,
        'Sch. Time': sch_time,
        'Arrival Time': arr_time,
        'Departure Time': dep_time,
        'ON': on,
        'OFF': off,
        'Leave Load': leave_load,
        'Wheelchair Event': whlchr_evt,
        'Sch. Runtime': sch_runtime,
        'Runtime': runtime,
        'Dwell Time': dwell
    };
}

const data = [
    createData('1', '7/10/2023', '2612', '06:47', '4200', '100694', 'Central at St Patrick (WB)', '1', 'True', 'True', '06:47', '6:24:00', '6:47:48', '2', '0', '2', '', '1', '1.0', '2.6'),
    createData('10', '7/13/2023', '2632', '14:07', '4204', '103741', 'Jubilee Hospital', '1', 'True', 'True', '14:07', '13:44:32', '14:07:48', '1', '0', '1', '1', '2', '1.5', '2.3'),
    createData('3', '7/27/2023', '2609', '07:32', '4207', '100515', 'Fort at Lee (EB)', '2', 'False', 'False', '07:33', '7:33:11', '7:33:11', '0', '0', '1', '', '1', '0.9', '0.0'),
    createData('14', '7/11/2023', '2027', '08:23', '1152', '100420', 'UVic Exchange Bay I', '60', 'True', 'True', '09:19', '9:15:44', '9:42:08', '0', '16', '0', '', '0', '0.0', '26.4'),
    createData('51', '7/19/2023', '2064', '17:32', '1176', '101425', 'McKenzie at Glanford (EB)', '18', 'True', 'True', '17:54', '17:51:58', '17:53:27', '4', '1', '22', '', '1', '0.8', '1.5'),
];

function OptimizingTransit({ date }) {
    const peakBus = '$$B_p=\\left\\lceil\\frac{t_c}{f}\\right\\rceil\\tag{1}$$';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h1' gutterBottom>
                    Optimizing Transit
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    Tristan Ford <br />
                    <i>{date}</i>
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Background
                </Typography>
                <Typography variant='body1' gutterBottom>
                    As an operational transit planner, I was asked many questions on a daily basis such as:

                    <ul>
                        <li>How is ridership on route <Latex>$r$</Latex> comparing from this year to last?</li>
                        <li>On which routes, day types and time periods are we seeing the most crowding?</li>
                        <li>Is trip <Latex>$t$</Latex> on route <Latex>$r$</Latex> over- or under-performing?</li>
                        <li>Is span on route <Latex>$r$</Latex> sufficient or too much?</li>
                        <li>Where can we optimize service to reduce service hours and / or peak vehicles?</li>
                    </ul>

                    In addition, I was responsible for developing the service plan for each service period in Victoria,
                    of which there were 5: winter, spring, summer, fall, and holiday.  These plans entailed any and all
                    changes to our routes to align with seasonal demand and changing conditions.  From route alignment
                    changes to headway (or frequency) modifications, the service plan outlined the details as well as estimated service
                    hour and vehicle costs. <br /><br />

                    As you can imagine, these tasks require a significant  amount of data analysis and diligent
                    documentation to complete in a quality and timely manner.  BC Transit was fortunate to have automated
                    passenger counters implemented across most of their fleet in 2019 which made a vast amount of data
                    accessible for various purposes, including operational planning.  For example, in <Link href='#table_1' underline='hover'>table 1</Link> some
                    data from one such dataset is shown.  When I joined the organization, in August 2021, I was determined to utilize this data to plan our transit
                    service more effectively and efficiently.  This would also make my day-to-day much less
                    manual labour intensive, but that was certainly an afterthought...
                </Typography><br />
                <div id='table_1' style={{ width: 800, maxWidth: '70vw', margin: '0 auto' }}>
                    <DataTable headers={Object.keys(data[0])} data={data} />
                </div>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Table 1: automated passenger counter data for each instance of a route stopping (or not stopping) at
                    a stop along its alignment.  A random set of entries from July 2023 are shown for demonstration purposes.
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Methodology
                </Typography>
                <Typography variant='body1' gutterBottom>
                    The potential I saw in the data was to be able to quantitatively compare route performance.  Historically,
                    there had been a lot of 'finger in the air' assumptions guiding service investment and improvements.
                    Service optimizations, or cuts, were almost unheard of due to the uncertainty in how reduced hours would
                    affect passenger comfort onboard.  I wanted to be able to review a set of tables and charts that would
                    tell me everything I needed to know on a service-period to service-period basis regarding route performance
                    such that we could make informed, data-driven decisions. <br /><br />

                    Before I launch into more transit jargon that many will not (and probably do not care to) know, all
                    technical aspects of planning transit boil down to a simple equation that can be extended and manipulated
                    depending on the application.

                    <div id='eq_1'>
                        <Latex>{peakBus}</Latex>
                    </div>

                    Where,

                    <ul>
                        <li><Latex>$B_p$</Latex> is the required number of buses, also called 'peak buses.'</li>
                        <li><Latex>$t_c$</Latex> is the time required for a route to complete a full cycle from start to
                            finish.  Also called 'cycle time.'</li>
                        <li><Latex>$f$</Latex> is the route frequency, also called 'headway.'</li>
                    </ul>

                    What follows is either a direct ouput, serves as an input or depends on <Link href='#eq_1' underline='hover'>(1)</Link>.

                </Typography>
                <Typography variant='h3' gutterBottom>
                    Phase 1: Excel Behemoth
                </Typography>
                <Typography variant='body1' gutterBottom>
                    I set to work on a prototype in Excel powered with VBA scripts.  This massive program took in several
                    datasets, such as the one in <Link href='#table_1' underline='hover'>table 1</Link>, and output a
                    smart aggregation of important statistics on a trip-level as well as provided an interface to perform
                    cost estimation for changing headways. It worked like a charm.  I was able to streamline my workflow
                    and tackle large service changes in a fraction of the time it took previously. An example output from
                    the winter 2023 service period in Victoria is shown in <Link href='#figure_1' underline='hover'>figure 1</Link>.
                </Typography><br />
                <Box
                    id='figure_1'
                    component="img"
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="User interface."
                    src="./assets/images/optimizing-transit/ui.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 1: user interface for the Excel analyzer.
                </Typography><br />
                <Typography variant='body1' gutterBottom>
                    I soon added a few more features including a system details page and risk and opportunities analyses
                    as can be seen in <Link href='#figure_2' underline='hover'>figure 2</Link>. Everything was automated
                    and responsive, the downside being it was designed for other planners and technical folks who were
                    literate in the calculated metrics.  I am sure there are some folks reading this who are confused by
                    the jargon and I cannot blame you.  Transit loves acronyms, synonyms and fancy words for simple concepts.
                    I won't bore you with a long paragraph explaining all the headers and values (though please reach out
                    if you are interested in such a thing) as I soon transitioned to a distilled version that was more
                    approachable.
                </Typography><br />
                <Box
                    id='figure_2'
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
                        alt="System details."
                        src="./assets/images/optimizing-transit/system-details.png"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: 800,
                            maxWidth: '100%',
                            mt: 2
                        }}
                        alt="Opportunities."
                        src="./assets/images/optimizing-transit/opportunities.png"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: 800,
                            maxWidth: '100%',
                            mt: 2
                        }}
                        alt="Risks."
                        src="./assets/images/optimizing-transit/risk.png"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 2: (from top to bottom) system details including number of vehicles operating by hour of the
                    day and service hours by day type.  Opportunities and risks, ordering routes by whether there are
                    'opportunities' to reduce service or 'risks' as to overcrowding.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Labour Shortage
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Cue the worldwide labour shortage that saw our transit operator numbers drop by 5-10% in late 2021.  In the past,
                    as noted earlier, there had been virtually no service cuts.  Ridership and service continuously grew
                    supported by a healthy fleet, infrastructure and resources.  The shortage created an unprecented
                    situation where severe cuts were necessary to provide reliable transit service to our customers.  I
                    was faced with the difficult task of reducing our service by at least 10%. <br /><br />

                    Thankfully, I was well equipped to evaluate and recommend cuts based on real data and estimate the impacts
                    from a cost and passenger comfort standpoint.  When faced with such a challenge, it is often best to start
                    with the most frequent routes as a small increase in headway can yield large service hour savings.
                    Many routes saw reductions in the off-peak periods, while some routes were also reduced in the peaks.  In <Link href='#figure_3' underline='hover'>figure 3</Link> you
                    can see that despite the cuts, that were implemented at the beginning of 2022, daily boardings
                    and boardings per service hour continued to climb.  I was successful in recommending optimizations that did
                    not stifle the return of ridership throughout the pandemic.
                </Typography>
                <Box
                    id='figure_3'
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
                        alt="Boardings per day."
                        src="./assets/images/optimizing-transit/daily-boardings.png"
                    />
                    <Box
                        component="img"
                        sx={{
                            width: 800,
                            maxWidth: '100%',
                            mt: 2
                        }}
                        alt="Boardings per service hour."
                        src="./assets/images/optimizing-transit/boardings-per-hr.png"
                    />
                </Box>
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 3: (from top to bottom) charts showing average daily boardings and boardings per service hour
                    on high frequency routes in Victoria from 2021-2023.  Major service reductions occured at the beginning
                    of 2022.  Additional reductions were implemented in late 2022.
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Phase 2: PowerBI
                </Typography>
                <Typography variant='body1' gutterBottom>
                    The experience of implementing major service reductions caused some unease through all levels of
                    the organization.  More transparency was desired regarding the mechanism by which cuts were recommended,
                    and unfortunately my Excel Behemoth was not the most accessible tool for the lay person.  Furthermore,
                    the experience of utilizing the tool had highlighted improvements to be made and new ways to analyze and
                    display the data. <br /><br />

                    I worked with our analysis team to develop several PowerBI dashboards that would be easily navigable by anyone
                    in the organization.  These were inspired by and utilized much of the logic I developed in the Excel tool.
                    There are essentially three levels starting from a route-level analysis, then reviewing route issues by
                    trip and finally reviewing trips by stop.
                </Typography>
                <Typography variant='h4' gutterBottom>
                    System Health Check
                </Typography>
                <Typography variant='body1' gutterBottom>
                    As a first step in assessing route performance, we are interested in a few key metrics.  First, we would
                    like to know if the route is performing well and moving more people than anticipated.  If so, we may want
                    to increase service on that route to provide more comfortable transit to customers and potentially capture
                    further ridership.  This is accomplished with the dashboard shown in <Link href='#figure_4' underline='hover'>figure 4</Link> under
                    the heading 'ridership.'  We are able to compare the boardings per revenue hour across different years as
                    well as against target values. <br /><br />

                    Second, we are interested in whether routes are under-performing and could see reduced service without affecting
                    existing customers.  This is also accomplished via the comparison with target boardings per revenue hour. <br /><br />

                    Lastly, we would like to know if there is overcrowding on a route such that additional service is necessary
                    to maintain passenger comfort standards and guidelines.  The 'passenger comfort' column on the far right of the
                    table helps us with this assessment.  We review each trip operated for the given year and compare the maximum
                    passenger load on that trip against our comfort guidelines and report a percentage of trips that meet or are
                    under the target.  This allows us to pinpoint routes that are experiencing overcrowding on a consistent basis. <br /><br />

                    There are some caveats, such as a frequent route may have a skewed passenger comfort percentage as those routes
                    tend to have many trips in the off-peaks that are not overcrowded.  Reviewing this information still requires
                    a level of understanding of the transit network, but is much more accessible than the previous iteration.
                </Typography>
                <Box
                    id='figure_4'
                    component="img"
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="System Health Check dashboard."
                    src="./assets/images/optimizing-transit/system-health-check.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 4: system health check dashboard for Victoria between 2022-2023.
                </Typography>
                <Typography variant='h4' gutterBottom>
                    Trip Analyzer
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Following an identification of a route to assess further, the Trip Analyzer is the next stop.  For this
                    example, we will look at route 75 which sports an 84% in the passenger comfort category.  This looks like
                    a good candidate for increased service! <br /><br />

                    In <Link href='#figure_5' underline='hover'>figure 5</Link> we can immediately identify the issue.  The
                    afternoon peak is severely overcrowded - some local knowledge would advise that tourists are using this
                    route to return downtown from Butchart Gardens, a popular destination in Victoria.  The red and orange
                    colored cells indicate that the passenger load for that trip is not meeting our passenger comfort
                    guidelines.
                </Typography><br />
                <Box
                    id='figure_5'
                    component="img"
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="Trip Analyzer dashboard."
                    src="./assets/images/optimizing-transit/trip-analyzer.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 4: trip analyzer for route 75 weekdays in spring 2023.  The image shows the afternoon peak in the
                    southbound direction.
                </Typography>
                <Typography variant='h4' gutterBottom>
                    Trip Profile
                </Typography>
                <Typography variant='body1' gutterBottom>
                    Last in the process is reviewing where the maxload is occurring and recommending some solutions. <br /><br />

                    As expected, in <Link href='#figure_5' underline='hover'>figure 5</Link>, we can see a sharp jump in passenger
                    load at Butchart Gardens as well as at Keating Cross Road.  Butchart Gardens is a tourist hot spot and Keating
                    Cross Road is an employment center which indicates that overcrowding is due to commuters and visitors utilizing
                    the same service.  It is also worth noting that this behavior is experienced primarily in the spring and summer
                    which implies a solution is likely seasonal in nature. <br /><br />

                    For this particular case, I recommended implementing short-turn trips between Butchart Gardens and Downtown
                    Victoria in the spring and summer months.  Unfortunately, we will need to wait until next year to see if this
                    will solve the issue.
                </Typography><br />
                <Box
                    id='figure_6'
                    component="img"
                    sx={{
                        width: 800,
                        maxWidth: '100%',
                        alignSelf: 'center'
                    }}
                    alt="Trip Profile dashboard."
                    src="./assets/images/optimizing-transit/trip-profile.png"
                />
                <Typography variant='caption' sx={{ alignSelf: 'center', textAlign: 'center', maxWidth: 800 }}>
                    Figure 5: trip profile for the 1635 southbound trip on route 75 in Victoria, spring 2023.
                </Typography>
                <Typography variant='h2' gutterBottom>
                    Conclusion
                </Typography>
                <Typography variant='body1' gutterBottom>
                    To wrap up this larger post, a few key takeaways and improvements resulting from this work are as follows:

                    <ul>
                        <li>
                            Route performance can now be quickly and effectively compared from service change to service
                            change.
                        </li>
                        <li>
                            Routes experiencing congestion can be prioritized for action and their effects can be quantified.
                        </li>
                        <li>
                            Solutions to identified issues are simpler to develop and require significantly less pre-work to
                            gather and visualize relevant data.
                        </li>
                        <li>
                            Improved granularity allows for seasonal solutions that are data driven.
                        </li>
                    </ul>
                    
                    This project was my penultimate contribution to BC Transit up until
                    the time of writing.  Many larger transit agencies likely have similar tools at their disposal,
                    however as BC Transit is a medium-sized agency with networks ranging from 5 buses to several hundred,
                    this was a novel and revolutionary improvement to how planning occurs in the organization.
                </Typography>
            </ThemeProvider>
        </Box>
    )
}

export default memo(OptimizingTransit);