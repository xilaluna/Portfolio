import React from "react"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import Bar from "./Bar"

const Skill = (props) => {
  const { name, skills } = props

  const bars = skills.map((obj) => {
    const { skill, level } = obj
    return <Bar key={skill} name={skill} level={level} />
  })
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={0} square sx={{ border: "1px solid black", height: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
            {name}
          </Typography>
          {bars}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Skill
