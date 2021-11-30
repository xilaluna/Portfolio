import React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import TechStack from "./TechStack"

const Project = (props) => {
  const { title, description, image, techstack } = props
  return (
    <Card elevation={0} square sx={{ px: 2 }}>
      <CardMedia component="img" height="300" src={image} alt={title} />
      <CardContent sx={{ px: 0 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 0 }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      <TechStack techstack={techstack} />
    </Card>
  )
}

export default Project
