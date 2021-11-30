import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const techContainer = {
  display: "flex",
  justifyContent: "space-between",
}

const TechStack = (props) => {
  const tech = props.techstack.map((techstack) => {
    return <Typography>{techstack}</Typography>
  })
  return <Box sx={techContainer}>{tech}</Box>
}

export default TechStack
