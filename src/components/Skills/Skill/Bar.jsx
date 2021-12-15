import React from "react"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const Bar = (props) => {
  const { name, level, image } = props
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ mt: 0.5, mr: 0.5 }}>{name}</Typography>
        <img
          src={require(`../../../assets/images/icons/${image}`).default}
          alt={name}
          height="30px"
        />
      </Box>

      <Slider
        defaultValue={level}
        step={10}
        min={0}
        max={100}
        marks
        disabled
        style={{ color: "#212121" }}
      />
    </Box>
  )
}

export default Bar
