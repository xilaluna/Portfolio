import React from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"
import profileGif from "../../assets/images/profile-gif.GIF"

const Hero = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Avatar alt="Xila Luna" src={profileGif} sx={{ width: 280, height: 280 }} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h3">
          Xila Luna is a creative full-stack engineer who is willing and able to find solutions when
          there are none.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Hero
