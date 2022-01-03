import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const headingStyles = {
  pb: 2,
  pr: 1,
}

const SectionHeader = (props) => {
  const { name, titleIcon } = props
  return (
    <Box sx={{ display: "flex" }}>
      <Typography variant="h6" sx={headingStyles}>
        {name}
      </Typography>
      <Box sx={{ pt: 0.2 }}>{titleIcon}</Box>
    </Box>
  )
}

export default SectionHeader
