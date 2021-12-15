import React, { useState, useEffect } from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import ArticleIcon from "@mui/icons-material/Article"
import IconButton from "@mui/material/IconButton"
import data from "../../assets/data/status.json"

const headingStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

const leftPosition = (theme) => ({
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
  },
})

const headingName = (theme) => ({
  fontSize: 45,
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    paddingTop: 1,
  },
})

const iconStyles = {
  fontSize: 35,
  color: "text.primary",
  m: 0.5,
}

const Header = () => {
  const [status, setStatus] = useState(data[0])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => setIndex((i) => (i + 1) % data.length), 5000)
    return () => clearInterval(timerId)
  }, [])

  useEffect(() => {
    setStatus(data[index]) // <-- update media state when index updates
  }, [index])

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ borderBottom: (theme) => `5px solid black`, mb: 1, py: 2 }}
    >
      <Grid item xs={12} md={3} sx={[headingStyles, leftPosition]}>
        <Typography>{status.status}</Typography>
        <Typography sx={{ px: 0.5 }}>{status.message}</Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={[headingStyles]}>
        <Typography variant="h1" sx={headingName}>
          XILA LUNA
        </Typography>
      </Grid>
      <Grid item xs={12} md={3} sx={[headingStyles]}>
        <IconButton href="https://github.com/xiluna">
          <GitHubIcon sx={iconStyles} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/xilaluna/">
          <LinkedInIcon sx={iconStyles} />
        </IconButton>
        <IconButton href="https://xilaluna.medium.com/">
          <ArticleIcon sx={iconStyles} />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default Header
