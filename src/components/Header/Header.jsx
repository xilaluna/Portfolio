import React, { useState, useEffect } from "react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import ArticleIcon from "@mui/icons-material/Article"
import IconButton from "@mui/material/IconButton"
import data from "../../assets/data/status.json"

const headingStyles = {
  display: "flex",
  alignItems: "center",
}

const leftPosition = (theme) => ({
  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-start",
    paddingLeft: 2,
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
  fontSize: 32,
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
          <Typography>{status.status}</Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={[headingStyles, { justifyContent: "center" }]}>
          <Typography variant="h1" sx={{ fontSize: 46, textAlign: "center" }}>
            XILA LUNA
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={[headingStyles, rightPosition]}>
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
    </Container>
  )
}

export default Header
