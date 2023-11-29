import * as React from "react";

import MainLayouts from "./layouts/mainLayouts";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function Form() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <MainLayouts>
      <h1>Contact us </h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
            <Paper sx={{ paddingBottom: 10, paddingTop: 5 }}>
              <Typography textAlign="center" variant="h5" sx={{ mt: 1, pb: 2 }}>
                กรอกแบบฟอร์มสำหรับการติดต่อ
              </Typography>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30ch", display: "flex" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "62ch", display: "flex" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "62ch", display: "flex" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Tel."
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "62ch", display: "flex" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="หัวข้อ"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "62ch", display: "flex" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="ติดต่อจาก"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
            <Paper sx={{ paddingBottom: 8, paddingTop: 5 }}>
              <Typography textAlign="center" variant="h5" sx={{ mt: 1, pb: 2 }}>
                กรอกแบบฟอร์มสำหรับนักศึกษาฝึกงาน
              </Typography>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "30ch", display: "flex" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "62ch", display: "flex" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "62ch", display: "flex" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Tel."
                  variant="outlined"
                  size="small"
                />
              </Box>
              <Box
                sx={{
                  "& > :not(style)": { m: 1, width: "62ch", display: "flex" },
                }}
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    ตำแหน่งที่ต้องการ
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="ตำแหน่งที่ต้องการ"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Fronend Dev</MenuItem>
                    <MenuItem value={20}>Backend Dev</MenuItem>
                    <MenuItem value={30}>Fullstack Dev</MenuItem>
                    <MenuItem value={40}>UX | UI Design</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box
                textAlign="center"
                alignItems="center"
                display="flex"
                justifyContent="center"
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "62ch", display: "flex" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="ติดต่อจาก"
                  variant="outlined"
                  size="small"
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </MainLayouts>
  );
}
