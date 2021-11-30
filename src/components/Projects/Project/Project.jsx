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
    <Card elevation={0} square sx={{ border: "1px solid black" }}>
      <CardMedia component="img" height="300" src={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>

      <CardContent>
        <TechStack techstack={techstack} />
      </CardContent>
    </Card>
  )
}

export default Project
