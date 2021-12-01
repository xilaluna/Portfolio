import { createTheme } from "@mui/material/styles"

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#19857b",
    },
    text: {
      disabled: "#000000",
    },
    background: {
      default: "#fffaf0",
      paper: "#fffaf0",
    },
  },
  typography: {
    fontFamily: "Newsreader",
    h1: {
      fontFamily: "Diplomata",
    },
    body2: {
      fontFamily: "Newsreader",
    },
    body1: {
      fontFamily: "Newsreader",
    },
  },
})

export default theme
