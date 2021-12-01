import React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import TechStack from "./ProjectItems/TechStack"
import Links from "./ProjectItems/Links"
import ButtonGroup from "@mui/material/ButtonGroup"

const headingStyles = {
  display: "flex",
  alignItems: "center",
}

const Project = (props) => {
  const { title, description, image, links, techstack } = props
  const linkIcons = links.map((obj) => {
    const { name, link } = obj
    return <Links name={name} link={link} />
  })

  return (
    <Card elevation={0} square sx={{ px: 2 }}>
      <CardMedia component="img" height="100%" src={image} alt={title} />
      <CardContent sx={{ px: 0, paddingBottom: 3 }}>
        <Grid container sx={{ paddingBottom: 2 }}>
          <Grid item xs={4} sx={[headingStyles, { justifyContent: "flex-start", paddingTop: 0.5 }]}>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={8} sx={[headingStyles, { justifyContent: "flex-end" }]}>
            <ButtonGroup size="small" aria-label="links group" variant="text">
              {linkIcons}
            </ButtonGroup>
          </Grid>
        </Grid>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <TechStack techstack={techstack} />
    </Card>
  )
}

export default Project
