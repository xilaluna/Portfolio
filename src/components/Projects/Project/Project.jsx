import React from "react"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Links from "./Links"
import CardActions from "@mui/material/CardActions"

const buttonContainer = (theme) => ({
  display: "flex",
  justifyContent: "space-between",
})

const Project = (props) => {
  const { title, subtitle, description, image, links } = props
  const linkIcons = links.map((obj) => {
    const { name, link } = obj
    return <Links key={link} name={name} link={link} />
  })

  return (
    <Card
      elevation={0}
      square
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        px: 2,
      }}
    >
      <CardMedia
        component="img"
        height="250px"
        sx={{ border: 2 }}
        src={require(`../../../assets/images/projects/${image}`).default}
        alt={title}
      />

      <CardContent sx={{ px: 0, flexGrow: 1 }}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1 }} variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
        <Typography gutterBottom>{description}</Typography>
      </CardContent>

      <CardActions sx={[buttonContainer, { p: 0 }]}>{linkIcons}</CardActions>
    </Card>
  )
}

export default Project
