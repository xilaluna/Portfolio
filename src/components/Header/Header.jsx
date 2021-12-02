import React from "react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import IconButton from "@mui/material/IconButton"

const headingStyles = {
  display: "flex",
  alignItems: "center",
}

const leftPosition = (theme) => ({
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
})

const rightPosition = (theme) => ({
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
})

const iconStyles = {
  color: "text.primary",
  m: 0.5,
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
        <Grid item xs={12} md={3} sx={[headingStyles, leftPosition]}>
          <Typography variant="p">👨🏽‍💻 Status: Learning Blockchain</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={[headingStyles, { justifyContent: "center" }]}>
          <Typography variant="h1" sx={{ fontSize: 50, textAlign: "center" }}>
            XILA LUNA
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={[headingStyles, rightPosition]}>
          <IconButton href="https://github.com/xiluna">
            <GitHubIcon sx={iconStyles} fontSize="large" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/xilaluna/">
            <LinkedInIcon sx={iconStyles} fontSize="large" />
          </IconButton>
          <IconButton href="https://github.com/xiluna">
            <TwitterIcon sx={iconStyles} fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Header
