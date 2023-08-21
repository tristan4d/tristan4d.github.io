import Typography from '@mui/material/Typography';

export default function Copyright() {
    return (
        <Typography sx={{ mt: 1, ml: 1 }} variant="body2" color="text.secondary">
            {'Copyright © '}
            {'Tristan Ford '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}