import * as React from "react";

import Paper from "@mui/material/Paper";

import MainLayouts from "./layouts/mainLayouts";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";

import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import { SocialIcon } from "react-social-icons";





export default function Profile() {
  return (
    <MainLayouts>
      <h1>Profile</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <Paper sx={{ mr: 1, pt: 2, height: 450 }}>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 100, height: 100 }}
                />
              </Box>
              <Typography textAlign="center" variant="h6" sx={{ mt: 1 }}>
                Atsadawat Kontha
              </Typography>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
              >
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
                        <AccountCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Username" secondary="Demo123" />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <AlternateEmailIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Email"
                      secondary="demo123@gmail.com"
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <CallIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Tel." secondary="0123456789" />
                  </ListItem>
                </List>
              </Box>
              <Box
                alignItems="center"
                display="flex"
                justifyContent="center"
                sx={{ pb: 2 }}
              >
                <Button variant="contained" startIcon={<EditIcon />}>
                  Edit Profile
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
            <Paper
              sx={{
                height: 450,
                mr: 1,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  pt: 2,
                  pl: 2,
                  pr: 2,
                  "@media (max-width:600px)": { fontSize: "1.5rem" }, // Example responsive font size
                  "@media (min-width:601px) and (max-width:960px)": {
                    fontSize: "2rem",
                  },
                  "@media (min-width:961px)": { fontSize: "2.5rem" },
                }}
              >
                Social Media
              </Typography>
              <Typography
                sx={{
                  pl: 2,
                  "@media (min-width:1px) and (max-width:600px)": {
                    fontSize: "0.8rem",
                  },
                  "@media (min-width:601px) and (max-width:900px)": {
                    fontSize: "1rem",
                  },
                  "@media (min-width:901px) and (max-width:1200px)": {
                    fontSize: "1rem",
                  },
                  "@media (min-width:1201px) and (max-width:1600px)": {
                    fontSize: "1.2rem",
                  },
                  "@media (min-width:1601px)": {
                    fontSize: 20,
                  },
                }}
              >
                Link to your social media profile
              </Typography>
              <Box
                sx={{
                  pl: 2,
                  pt: 2,
                  pr: 1,
                  display: "flex",
                }}
              >
                <SocialIcon url="www.pinterest.com" />
                <Box sx={{ pl: 2 }}>
                  <SocialIcon url="www.meetup.com" />
                </Box>
                <Box sx={{ pl: 2 }}>
                  <SocialIcon
                    url="www.facebook.com"
                    style={{
                      "@media (max-width:600px)": {
                        width: 10 , height:10,
                      },
                    }}
                  />
                </Box>
                <Box sx={{ pl: 2 }}>
                  <SocialIcon
                    url="www.github.com"
                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Box sx={{ pl: 2 }}>
                  <SocialIcon
                    url="www.snapchat.com"
                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Box sx={{ pl: 2 }}>
                  <SocialIcon
                    url="www.twitter.com"
                    style={{ width: 50, height: 50 }}
                  />
                </Box>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  pt: 2,
                  pl: 2,
                  pr: 2,
                  "@media (max-width:600px)": { fontSize: "1.5rem" }, // Example responsive font size
                  "@media (min-width:601px) and (max-width:960px)": {
                    fontSize: "2rem",
                  },
                  "@media (min-width:961px)": { fontSize: "2.5rem" },
                }}
              >
                About Me
              </Typography>
              <Typography
                sx={{
                  pl: 2,
                  "@media (min-width:1px) and (max-width:600px)": {
                    fontSize: "0.8rem",
                  },
                  "@media (min-width:601px) and (max-width:900px)": {
                    fontSize: "1rem",
                  },
                  "@media (min-width:901px) and (max-width:1200px)": {
                    fontSize: "1rem",
                  },
                  "@media (min-width:1201px) and (max-width:1600px)": {
                    fontSize: "1.2rem",
                  },
                  "@media (min-width:1601px)": {
                    fontSize: 20,
                  },
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                quod ullam commodi minima voluptatem eligendi libero hic magni
                maxime officiis ea assumenda a aut, soluta blanditiis voluptatum
                nesciunt facere nobis. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Aperiam similique eveniet rem consequatur nam
                reprehenderit eos! Aliquid ipsam consequatur harum incidunt,
                culpa dolorem odit quas perspiciatis soluta ad, nemo
                voluptatibus!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </MainLayouts>
  );
}
