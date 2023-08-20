import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Project({ backToCards, children, min_500 }) {

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: min_500 ? 'row' : 'column', alignItems: 'flex-start', pt: 2, pl: min_500 ? 0 : 2 }}>
            <Button
                onClick={backToCards}
                sx={{
                    position: min_500 ? 'sticky' : 'fixed',
                    top: 5,
                    right: min_500 ? null : 0,
                    m: min_500 ? 5 : 0,
                    opacity: min_500 ? '100%' : '50%',
                    ":hover": {
                        opacity: '100%',
                    }
                }}
                startIcon={<ArrowBackIcon />}
            >
                {min_500 && 'Back'}
            </Button>
            {children}
        </Box>
    )
}