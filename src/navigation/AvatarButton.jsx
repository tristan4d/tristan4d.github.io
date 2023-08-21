import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

export default function ImageAvatar({ onClick }) {
    return (
        <IconButton sx={{ width: 100, height: 100 }}
            aria-label='profile picture'
            onClick={onClick}
        >
            <Avatar
                sx={{ width: 80, height: 80 }}
                alt="tristan ford"
                src="./assets/images/avatar/FordT_Bus-2.jpg"
            />
        </IconButton>
    );
}