import React from "react"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const Bar = (props) => {
  const { name, level } = props
  return (
    <Box>
      <Typography>{name}</Typography>
      <Slider
        defaultValue={level}
        step={10}
        min={0}
        max={100}
        marks
        disabled
        style={{ color: "#21211f" }}
      />
    </Box>
  )
}

export default Bar
