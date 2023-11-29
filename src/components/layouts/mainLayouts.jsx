import TestSideBar from "../../TestSideBar";

import React from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const MainLayouts = ({ children }) => {
  // Create a theme with responsive padding
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

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
