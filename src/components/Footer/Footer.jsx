import React from "react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}
      {" Xila Luna"}
    </Typography>
  )
}

const Footer = () => {
  return (
    <Container
      component="footer"
      sx={{
        borderTop: (theme) => `5px solid black`,
        mt: 1,
        py: [5, 5],
      }}
    >
      <Copyright />
    </Container>
  )
}

export default Footer
