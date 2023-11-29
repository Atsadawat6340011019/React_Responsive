import * as React from "react";

import MainLayouts from "./layouts/mainLayouts";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import AppsIcon from "@mui/icons-material/Apps";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";


export default function Dashboard() {
  return (
    <MainLayouts>
      <h1>Dashboard</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
            <Paper sx={{ height: 280 }}>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                sx={{ pt: 2 }}
              >
                <AppsIcon
                  sx={{
                    "@media (min-width:1px) and (max-width:600px)": {
                      fontSize: 70,
                    },
                    "@media (min-width:601px) and (max-width:900px)": {
                      fontSize: 60,
                    },
                    "@media (min-width:901px)": {
                      fontSize: 40,
                    },
                  }}
                />
              </Box>
              <Typography
                textAlign="center"
                variant="h4"
                sx={{
                  pt: 6,
                  "@media (min-width:1px) and (max-width:600px)": {
                    fontSize: 70,
                  },
                  "@media (min-width:601px) and (max-width:900px)": {
                    fontSize: 60,
                  },
                  "@media (min-width:901px)": {
                    fontSize: 40,
                  },
                }}
              >
                50
              </Typography>
              <Typography
                textAlign="center"
                variant="subtitle1"
                sx={{
                  pt: 1,
                  "@media (min-width:1px) and (max-width:600px)": {
                    fontSize: 30,
                  },
                  "@media (min-width:601px) and (max-width:900px)": {
                    fontSize: 23,
                  },
                  "@media (min-width:901px)": {
                    fontSize: 16,
                  },
                }}
              >
                Total Projects
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
            <Paper sx={{ height: 280 }}>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                sx={{ pt: 2 }}
              >
                <CheckIcon
                  sx={{
                    "@media (min-width:1px) and (max-width:600px)": {
                      fontSize: 70,
                    },
                    "@media (min-width:601px) and (max-width:900px)": {
                      fontSize: 60,
                    },
                    "@media (min-width:901px)": {
                      fontSize: 40,
                    },
                  }}
                />
              </Box>
              <Typography
                textAlign="center"
                variant="h4"
                sx={{
                  pt: 6,
                  "@media (min-width:1px) and (max-width:600px)": {
                    fontSize: 70,
                  },
                  "@media (min-width:601px) and (max-width:900px)": {
                    fontSize: 60,
                  },
                  "@media (min-width:901px)": {
                    fontSize: 40,
                  },
                }}
              >
                34
              </Typography>
              <Typography
                textAlign="center"
                variant="subtitle1"
                sx={{
                  pt: 1,
                  "@media (min-width:1px) and (max-width:600px)": {
                    fontSize: 30,
                  },
                  "@media (min-width:601px) and (max-width:900px)": {
                    fontSize: 23,
                  },
                  "@media (min-width:901px)": {
                    fontSize: 16,
                  },
                }}
              >
                Complete
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
            <Paper sx={{ height: 280 }}>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                sx={{ pt: 2 }}
              >
                <HourglassTopIcon
                  sx={{
                    "@media (min-width:1px) and (max-width:600px)": {
                      fontSize: 70,
                    },
                    "@media (min-width:601px) and (max-width:900px)": {
                      fontSize: 60,
                    },
                    "@media (min-width:901px)": {
                      fontSize: 40,
                    },
                  }}
                />
              </Box>
              <Typography
                textAlign="center"
                variant="h4"
                sx={{
                  pt: 6,
                  "@media (min-width:1px) and (max-width:600px)": {
                    fontSize: 70,
                  },
                  "@media (min-width:601px) and (max-width:900px)": {
                    fontSize: 60,
                  },
                  "@media (min-width:901px)": {
                    fontSize: 40,
                  },
                }}
              >
                26
              </Typography>
              <Typography
                textAlign="center"
                variant="subtitle1"
                sx={{
                  pt: 1,
                  "@media (min-width:1px) and (max-width:600px)": {
                    fontSize: 30,
                  },
                  "@media (min-width:601px) and (max-width:900px)": {
                    fontSize: 23,
                  },
                  "@media (min-width:901px)": {
                    fontSize: 16,
                  },
                }}
              >
                Processing
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={3}>
            <Paper sx={{ height: 280 }}>
              <Typography textAlign="center" sx={{ fontSize: 20, pt: 2 }}>
                โปรเจ็คที่กำลังทำ
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={3}>
            <Paper sx={{ height: 280 }}>
              <Typography textAlign="center" sx={{ fontSize: 20, pt: 2 }}>
                โปรเจ็คที่เสร็จแล้ว
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </MainLayouts>
  );
}
