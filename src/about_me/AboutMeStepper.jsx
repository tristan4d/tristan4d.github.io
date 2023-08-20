import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function AboutMeStepper({ steps, activeStep, handleNext, handleBack }) {
    const theme = useTheme();

    return (
        <MobileStepper
            variant="progress"
            steps={steps}
            position="static"
            activeStep={activeStep}
            sx={{ maxWidth: 400, margin: '0 auto' }}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
                    Next
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowLeft />
                    ) : (
                        <KeyboardArrowRight />
                    )}
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? (
                        <KeyboardArrowRight />
                    ) : (
                        <KeyboardArrowLeft />
                    )}
                    Back
                </Button>
            }
        />
    );
}