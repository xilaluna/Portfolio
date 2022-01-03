import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Box from "@mui/material/Box"
import SectionHeader from "../SectionHeader/SectionHeader"

const ListCard = (props) => {
  const { name, list, titleIcon } = props

  const listItems = list.map((obj) => {
    const { name, location, description, date, image } = obj
    return (
      <ListItem
        key={`${name}-${date}`}
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          pt: 0,
          pb: 3,
          pl: 3,
        }}
      >
        <img
          src={require(`../../assets/images/aboutIcons/${image}`).default}
          alt={name}
          height="30px"
        />

        <Box
          sx={{
            paddingTop: 0,
            paddingLeft: 2,
            paddingRight: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ fontSize: 18 }}>{name}</Typography>
          <Typography variant="body2">{location}</Typography>
          <Typography color="text.secondary" variant="subtitle2">
            {date}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </ListItem>
    )
  })
  return (
    <Card elevation={0} square sx={{ px: 2 }}>
      <CardContent sx={{ px: 0, pt: 0 }}>
        <SectionHeader name={name} titleIcon={titleIcon} />
        <List sx={{ py: 0 }}>{listItems}</List>
      </CardContent>
    </Card>
  )
}
export default ListCard
