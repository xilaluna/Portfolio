import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

const headingStyles = {
  paddingBottom: 2,
  paddingLeft: 1,
}

const SectionHeader = (props) => {
  const { name, titleIcon } = props
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ pt: 0.2 }}>{titleIcon}</Box>
      <Typography variant="h6" sx={headingStyles}>
        {name}
      </Typography>
    </Box>
  )
}

export default SectionHeader
