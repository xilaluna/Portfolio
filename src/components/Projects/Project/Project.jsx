import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import TechStack from "./TechStack"
import mainImage from "../../../assets/images/boringstocks-main.png"

const Project = (props) => {
  const { title, description, techstack, image } = props
  return (
    <Grid item xs={12} md={6}>
      <Card elevation={0} square sx={{ border: "1px solid black" }}>
        <CardMedia component="img" height="300" image={mainImage} alt={title} />
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
    </Grid>
  )
}

export default Project
