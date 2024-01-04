import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ShortBio() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <i>Updated: January 2024</i>
        </Typography>
        <Typography variant="body1" gutterBottom>
          Why transit? Because it's a crucial element in creating accessible,
          green, and safe cities. I am committed to exhaustively discovering new
          opportunities to enhance transportation in urban areas. <br />
          <br />
          Fortunately, my interests extend beyond transportation innovation.
          Outside of work, I engage in various hobbies like going to the gym,
          playing hockey, and exploring new areas of math and software through
          personal projects. <br />
          <br />I embrace opportunities with a "yes" attitude, leading me to
          take on challenges such as living abroad or tackling complex problems.
          This philosophy, which permeates my personal and professional life,
          has proven itself rewarding time and time again. The map showcases
          some of the locations these experiences have taken me. <br />
          <br />
          Lastly, the image below captures what truly motivates me.
        </Typography>
        <br />
        <Box
          component="img"
          sx={{
            maxWidth: "90%",
            alignSelf: "center",
          }}
          alt="My family."
          src="./assets/images/victoria/family.jpg"
        />
        <Typography
          variant="caption"
          sx={{ alignSelf: "center", textAlign: "center", maxWidth: 800 }}
        >
          Figure 1: My favourite people.
        </Typography>
      </ThemeProvider>
    </Box>
  );
}
