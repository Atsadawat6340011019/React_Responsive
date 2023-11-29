import TestSideBar from "../../TestSideBar";
import Sidenav from "../Sidenav";
import React from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const MainLayouts = ({ children }) => {
  // Create a theme with responsive padding
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isXtraScreen = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TestSideBar />
      <div
        style={{
          paddingLeft: isMediumScreen ? theme.spacing(27) : theme.spacing(1),
          paddingTop: 70,
          paddingRight: 10,
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default MainLayouts;
