"use clinet";

import {
  Paper,
  Typography,
  Stack,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

function createData(name: string, calories: number) {
  return {name, calories};
}
const rows = [
  createData("SensorDevice01", 159),
  createData("SensorDevice02", 123),
  createData("SensorDevice03", 262),
  createData("SensorDevice04", 305),
  createData("SensorDevice05", 356),
];

export default function TotalSensor() {
  return (
    <>
      <Box sx={{mt: 2}} />

      <Stack direction={{xs: 'column' ,md:"row"}} spacing={1}>
        <Paper
          sx={{
            bgcolor: "#272727",
            pr: 0,
            pb: 2,
            width: {xs: "100%", md: '15%'},
            border: 1,
            borderColor: "#A2A2A2",
          }}
        >
          <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
            Total Sensor(s)
          </Typography>
          <Stack
            // sx={{mt: 6}}
            direction="row"
            justifyContent={"center"}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "150px !important",
                color: "lightgreen",
                py: 3,
              }}
            >
              8
            </Typography>
          </Stack>
        </Paper>

        <Paper
          sx={{
            bgcolor: "#272727",
            pr: 0,
            pb: 2,
            width: {xs: "100%", md: '20%'},
            border: 1,
            borderColor: "#A2A2A2",
          }}
        >
          <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
            Last Temperature
          </Typography>
          <TableContainer component={Paper}>
            <Table
              sx={{minWidth: 100, bgcolor: "#272727"}}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{color: "#f0f0f0"}}>Device_name</TableCell>
                  <TableCell sx={{color: "#f0f0f0"}} align="right">
                    Last_temp
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      sx={{p: "8px", color: "#f0f0f0"}}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right" sx={{p: "8px", color: "#f0f0f0"}}>
                      {row.calories}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper
          sx={{
            bgcolor: "#272727",
            pr: 0,
            pb: 2,
            width: {xs: "100%", md: '20%'},
            border: 1,
            borderColor: "#A2A2A2",
          }}
        >
          <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
            Last Temperature
          </Typography>
          <TableContainer component={Paper}>
            <Table
              sx={{minWidth: 100, bgcolor: "#272727"}}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{color: "#f0f0f0"}}>Device_name</TableCell>
                  <TableCell sx={{color: "#f0f0f0"}} align="right">
                    Last_temp
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell
                      sx={{p: "8px", color: "#f0f0f0"}}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right" sx={{p: "8px", color: "#f0f0f0"}}>
                      {row.calories}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper
          sx={{
            bgcolor: "#272727",
            pr: 0,
            pb: 2,
            width: {xs: "100%", md: '45%'},
            border: 1,
            borderColor: "#A2A2A2",
          }}
        >
          <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
            Temperature
          </Typography>
          <Stack
            direction={"row"}
            sx={{mx: 2}}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
              BatterySensorDevice01
            </Typography>

            <Box
              sx={{
                height: 20,
                width: "100%",
                background: "linear-gradient(to right, red, yellow ,green)",
              }}
            />
            <Typography variant="h6" sx={{color: "lightgreen", pr: 2}}>
              100
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{mx: 2}}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
              BatterySensorDevice02
            </Typography>

            <Box
              sx={{
                height: 20,
                width: "100%",
                background: "linear-gradient(to right, red, yellow ,green)",
              }}
            />
            <Typography variant="h6" sx={{color: "lightgreen", pr: 2}}>
              100
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{mx: 2}}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
              BatterySensorDevice03
            </Typography>

            <Box
              sx={{
                height: 20,
                width: "100%",
                background: "linear-gradient(to right, red, yellow ,green)",
              }}
            />
            <Typography variant="h6" sx={{color: "lightgreen", pr: 2}}>
              100
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{mx: 2}}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
              BatterySensorDevice04
            </Typography>

            <Box
              sx={{
                height: 20,
                width: "100%",
                background: "linear-gradient(to right, red, yellow ,green)",
              }}
            />
            <Typography variant="h6" sx={{color: "lightgreen", pr: 2}}>
              100
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{mx: 2}}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
              BatterySensorDevice05
            </Typography>

            <Box
              sx={{
                height: 20,
                width: "100%",
                background: "linear-gradient(to right, red, yellow ,green)",
              }}
            />
            <Typography variant="h6" sx={{color: "lightgreen", pr: 2}}>
              100
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{mx: 2}}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
              BatterySensorDevice06
            </Typography>

            <Box
              sx={{
                height: 20,
                width: "100%",
                background: "linear-gradient(to right, red, yellow ,green)",
              }}
            />
            <Typography variant="h6" sx={{color: "lightgreen", pr: 2}}>
              100
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{mx: 2}}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
              BatterySensorDevice07
            </Typography>

            <Box
              sx={{
                height: 20,
                width: "100%",
                background: "linear-gradient(to right, red, yellow ,green)",
              }}
            />
            <Typography variant="h6" sx={{color: "lightgreen", pr: 2}}>
              100
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            sx={{mx: 2}}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
            <Typography variant="body2" sx={{color: "#f0f0f0", m: 1}}>
              BatterySensorDevice08
            </Typography>

            <Box
              sx={{
                height: 20,
                width: "100%",
                background: "linear-gradient(to right, red, yellow ,green)",
              }}
            />
            <Typography variant="h6" sx={{color: "lightgreen", pr: 2}}>
              100
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
}
