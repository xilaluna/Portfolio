import React from "react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"

const headingStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const iconStyles = {
  mx: [2, 2],
}

const Header = () => {
  return (
    <Container
      component="header"
      disableGutters
      sx={{
        borderBottom: (theme) => `5px solid black`,
        mb: 1,
        py: [1, 1],
      }}
    >
      <Grid container>
        <Grid item xs={12} md={3} sx={headingStyles}>
          <Typography variant="p">👨🏽‍💻 Status: Learning Blockchain</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={headingStyles}>
          <Typography variant="h1" sx={{ fontSize: 50, textAlign: "center" }}>
            XILA LUNA
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={headingStyles}>
          <GitHubIcon sx={iconStyles} fontSize="large" />
          <LinkedInIcon sx={iconStyles} fontSize="large" />
          <TwitterIcon sx={iconStyles} fontSize="large" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header
