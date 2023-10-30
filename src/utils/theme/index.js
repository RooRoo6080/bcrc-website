import { createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1261cb",
    },
    background: {
      default: "#06070a",
    },
    text: {
      secondary: "#cccccc",
    },
  },
  typography,
});

export default theme;
