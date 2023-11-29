import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MainLayouts from "./layouts/mainLayouts";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  Grid,
  Link,
  Typography,
} from "@mui/material";



export default function Tablestatus() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    UserGet();
  }, []);

  const UserGet = () => {
    fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        }
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      );
  };

  const UserUpdate1 = (id) => {
    window.location = "/update/" + id;
  };
  const UserDelete = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: id,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://www.melivecode.com/api/users/delete", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "ok") {
          UserGet();
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <MainLayouts>
      <CssBaseline />

      <Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Container maxWidth="xl" sx={{ pt: 2 }}>
            <Paper sx={{ p: 2 }}>
              <Box display="flex">
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Users
                  </Typography>
                </Box>
                <Box>
                  <Link href="/create">
                    <Button
                      variant="contained"
                      style={{ background: "#2E3B55" }}
                    >
                      Creat
                    </Button>
                  </Link>
                </Box>
              </Box>

              <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
                <Table
                  sx={{
                    minWidth: 650,
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell align="center">Avatar</TableCell>
                      <TableCell align="center">First Name</TableCell>
                      <TableCell align="center">Last Name</TableCell>
                      <TableCell align="center">Username</TableCell>
                      <TableCell align="center">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="center">
                          <Box display={"flex"} justifyContent={"center"}>
                            <Avatar alt={row.username} src={row.avatar} />
                          </Box>
                        </TableCell>
                        <TableCell align="center">{row.fname}</TableCell>
                        <TableCell align="center">{row.lname}</TableCell>
                        <TableCell align="center">{row.username}</TableCell>

                        <TableCell align="center">
                          <ButtonGroup
                            variant="outlined"
                            aria-label="outlined button group"
                          >
                            <Button
                              onClick={() => UserUpdate1(row.id)}
                              style={{
                                background: "#a5d6a7",
                                fontWeight: "bold",
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => UserDelete(row.id)}
                              style={{
                                background: "#f8bbd0",
                                fontWeight: "bold",
                              }}
                            >
                              Delete
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </MainLayouts>
  );
}
