import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ThesisPlaceholder({ date }) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThemeProvider theme={theme}>
                <Typography variant='h1' gutterBottom>
                    Under Construction
                </Typography>
                <Typography variant='subtitle1' gutterBottom>
                    Tristan Ford <br />
                    <i>{date}</i>
                </Typography>
            </ThemeProvider>
        </Box>
    )
}