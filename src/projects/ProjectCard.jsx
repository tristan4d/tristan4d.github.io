import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ProjectCard({ viewProject, title, description, tags, date, image = "https://source.unsplash.com/random?wallpapers" }) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                // opacity: '50%'
            }}
        >
            <CardMedia
                component="div"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image={image}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography gutterBottom>
                    {description}
                </Typography>
                {tags}
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button variant='contained' size="small" onClick={viewProject}>View</Button>
                <Typography variant='caption' sx={{ pr: 2 }}>
                    <i>{date}</i>
                </Typography>
            </CardActions>
        </Card>
    )
}