import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const techContainer = (theme) => ({
  display: "flex",
  justifyContent: "space-between",
})

const insertBetween = (symbol, array) => {
  return array.flatMap((x) => [symbol, x]).slice(1)
}

const TechStack = (props) => {
  const newArray = insertBetween("|", props.techstack)

  const tech = newArray.map((newArray) => {
    return <Typography>{newArray}</Typography>
  })
  return <Box sx={techContainer}>{tech}</Box>
}

export default TechStack
