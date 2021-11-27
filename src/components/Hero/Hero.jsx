import React from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import profileGif from "../../assets/images/profile-gif.GIF"

const pictureStyles = (theme) => ({
  [theme.breakpoints.up("xs")]: {
    width: 300,
    height: 300,
  },
  [theme.breakpoints.up("sm")]: {
    width: 515,
    height: 515,
  },
  [theme.breakpoints.up("md")]: {
    width: 300,
    height: 300,
  },
  width: 300,
  height: "100%",
  backgroundImage: `url(${profileGif})`,
  backgroundRepeat: "no-repeat",
  backgroundColor:
    theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "50%",
  border: 2,
})

const statementStyles = (theme) => ({
  [theme.breakpoints.up("xs")]: {
    fontSize: 20,
  },

  [theme.breakpoints.up("sm")]: {
    fontSize: 30,
  },
})

const Hero = () => {
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={pictureStyles} />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="p" component="p" sx={statementStyles}>
          Xila Luna is a creative full-stack engineer who is willing and able to find solutions when
          there are none.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Hero
