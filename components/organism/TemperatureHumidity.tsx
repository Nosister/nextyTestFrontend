"use client";

import * as React from "react";

import {Box, Paper, Stack, Typography} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
} from "recharts";
import {LegendProps} from "recharts";

type CustomizedLegendProps = {
  external: any; // define the type of 'external' based on your requirements
} & LegendProps;

type PayloadItem = {
  value: string;
  color: string;
  // ... other properties that you might need
};

type RenderLegendProps = {
  payload: PayloadItem[];
};
const data = [
  {
    name: "02/02 11:00",
    temperator_Sensor_Device01: 2,
    temperator_Sensor_Device02: 3,
    temperator_Sensor_Device03: 5,
    temperator_Sensor_Device04: 6,
    temperator_Sensor_Device05: 2,
    temperator_Sensor_Device06: 3,
    temperator_Sensor_Device07: 1,
  },
  {
    name: "02/02 12:00",
    temperator_Sensor_Device01: 15,
    temperator_Sensor_Device02: 12,
    temperator_Sensor_Device03: 23,
    temperator_Sensor_Device04: 24,
    temperator_Sensor_Device05: 24,
    temperator_Sensor_Device06: 42,
    temperator_Sensor_Device07: 32,
  },
  {
    name: "02/02 13:00",
    temperator_Sensor_Device01: 35,
    temperator_Sensor_Device02: 15,
    temperator_Sensor_Device03: 32,
    temperator_Sensor_Device04: 32,
    temperator_Sensor_Device05: 12,
    temperator_Sensor_Device06: 22,
    temperator_Sensor_Device07: 42,
  },
  {
    name: "02/02 14:00",
    temperator_Sensor_Device01: 29,
    temperator_Sensor_Device02: 19,
    temperator_Sensor_Device03: 23,
    temperator_Sensor_Device04: 21,
    temperator_Sensor_Device05: 42,
    temperator_Sensor_Device06: 32,
    temperator_Sensor_Device07: 33,
  },
  {
    name: "02/02 15:00",
    temperator_Sensor_Device01: 15,
    temperator_Sensor_Device02: 12,
    temperator_Sensor_Device03: 12,
    temperator_Sensor_Device04: 22,
    temperator_Sensor_Device05: 12,
    temperator_Sensor_Device06: 11,
    temperator_Sensor_Device07: 21,
  },
  {
    name: "02/02 16:00",
    temperator_Sensor_Device01: 4,
    temperator_Sensor_Device02: 3,
    temperator_Sensor_Device03: 2,
    temperator_Sensor_Device04: 1,
    temperator_Sensor_Device05: 1,
    temperator_Sensor_Device06: 1,
    temperator_Sensor_Device07: 1,
  },
  {
    name: "02/02 17:00",
    temperator_Sensor_Device01: 2,
    temperator_Sensor_Device02: 3,
    temperator_Sensor_Device03: 2,
    temperator_Sensor_Device04: 4,
    temperator_Sensor_Device05: 4,
    temperator_Sensor_Device06: 1,
    temperator_Sensor_Device07: 2,
  },
];

const dataHu = [
  {
    name: "02/02 11:00",
    Humidity_Sensor_device01: 100,
    Humidity_Sensor_device02: 100,
    Humidity_Sensor_device03: 100,
    Humidity_Sensor_device04: 100,
    Humidity_Sensor_device05: 100,
    Humidity_Sensor_device06: 100,
    Humidity_Sensor_device07: 100,
  },
  {
    name: "02/02 12:00",
    Humidity_Sensor_device01: 42,
    Humidity_Sensor_device02: 95,
    Humidity_Sensor_device03: 76,
    Humidity_Sensor_device04: 95,
    Humidity_Sensor_device05: 88,
    Humidity_Sensor_device06: 99,
    Humidity_Sensor_device07: 95,
  },
  {
    name: "02/02 13:00",
    Humidity_Sensor_device01: 100,
    Humidity_Sensor_device02: 92,
    Humidity_Sensor_device03: 99,
    Humidity_Sensor_device04: 80,
    Humidity_Sensor_device05: 99,
    Humidity_Sensor_device06: 99,
    Humidity_Sensor_device07: 100,
  },
  {
    name: "02/02 14:00",
    Humidity_Sensor_device01: 45,
    Humidity_Sensor_device02: 65,
    Humidity_Sensor_device03: 63,
    Humidity_Sensor_device04: 55,
    Humidity_Sensor_device05: 53,
    Humidity_Sensor_device06: 66,
    Humidity_Sensor_device07: 74,
  },
  {
    name: "02/02 15:00",
    Humidity_Sensor_device01: 55,
    Humidity_Sensor_device02: 78,
    Humidity_Sensor_device03: 75,
    Humidity_Sensor_device04: 90,
    Humidity_Sensor_device05: 75,
    Humidity_Sensor_device06: 74,
    Humidity_Sensor_device07: 72,
  },
  {
    name: "02/02 16:00",
    Humidity_Sensor_device01: 40,
    Humidity_Sensor_device02: 32,
    Humidity_Sensor_device03: 22,
    Humidity_Sensor_device04: 12,
    Humidity_Sensor_device05: 1,
    Humidity_Sensor_device06: 1,
    Humidity_Sensor_device07: 11,
  },
  {
    name: "02/02 17:00",
    Humidity_Sensor_device01: 100,
    Humidity_Sensor_device02: 95,
    Humidity_Sensor_device03: 98,
    Humidity_Sensor_device04: 93,
    Humidity_Sensor_device05: 99,
    Humidity_Sensor_device06: 100,
    Humidity_Sensor_device07: 92,
  },
];

const dataHuSoil = [
  {
    name: "02/02 11:00",
    Soil_Humidity_Sensor_device01: 100,
  },
  {
    name: "02/03 11:00",
    Soil_Humidity_Sensor_device01: 1,
  },
  {
    name: "02/04 11:00",
    Soil_Humidity_Sensor_device01: 100,
  },
  {
    name: "02/05 11:00",
    Soil_Humidity_Sensor_device01: 100,
  },
  {
    name: "02/06 11:00",
    Soil_Humidity_Sensor_device01: 1,
  },
  {
    name: "02/07 11:00",
    Soil_Humidity_Sensor_device01: 100,
  },
  {
    name: "02/08 11:00",
    Soil_Humidity_Sensor_device01: 1,
  },
];

const dataTemSoil = [
  {
    name: "02/02 11:00",
    Soil_Temperator_Sensor_Device01: 2,
  },
  {
    name: "02/03 11:00",
    Soil_Temperator_Sensor_Device01: 15,
  },
  {
    name: "02/04 11:00",
    Soil_Temperator_Sensor_Device01: 35,
  },
  {
    name: "02/05 11:00",
    Soil_Temperator_Sensor_Device01: 29,
  },
  {
    name: "02/06 11:00",
    Soil_Temperator_Sensor_Device01: 15,
  },
  {
    name: "02/07 11:00",
    Soil_Temperator_Sensor_Device01: 4,
  },
  {
    name: "02/08 11:00",
    Soil_Temperator_Sensor_Device01: 2,
  },
];

const CustomizedLegend: React.FC<any> = (props) => {
  const {external, payload} = props;

  // Utilize the 'external' prop as required

  return (
    <Box>
      {
        // @ts-ignore
        payload.map((entry, index) => (
          <Box key={`item-${index}`} style={{color: "white"}}>
            {entry.value}
          </Box>
        ))
      }
    </Box>
  );
};

export default function TemperatureHumidity() {
  return (
    <>
      <Stack
        sx={{mt: 1}}
        direction={{md: "row", xs: "column"}}
        spacing={1}
        alignItems={"flex-start"}
        justifyContent={"start"}
      >
        <Paper
          sx={{
            bgcolor: "#272727",
            border: 1,
            borderColor: "#A2A2A2",
            pr: 2,
            pb: 2,
            width: "100%",
          }}
        >
          <Typography sx={{color: "#f0f0f0", py: 1, px: 1, ml: 4, pb: 4}}>
            Temperature
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#f0f0f0" />
              <YAxis stroke="#f0f0f0" />
              <Tooltip />
              {/* <Legend
                iconType="plainline"
                content={<CustomizedLegend external={CustomizedLegend} />}
              /> */}
              <Legend
                iconType="plainline"
                wrapperStyle={{color: "white !important", paddingTop: 2}}
              />

              <Line
                type="monotone"
                dataKey="temperator_Sensor_Device01"
                stroke="lightgreen"
              />
              <Line
                type="monotone"
                dataKey="temperator_Sensor_Device02"
                stroke="#ffb440"
              />

              <Line
                type="monotone"
                dataKey="temperator_Sensor_Device03"
                stroke="lightblue"
              />
              <Line
                type="monotone"
                dataKey="temperator_Sensor_Device04"
                stroke="orange"
              />
              <Line
                type="monotone"
                dataKey="temperator_Sensor_Device05"
                stroke="#FC4F4F"
              />
              <Line
                type="monotone"
                dataKey="temperator_Sensor_Device06"
                stroke="#D36CFF"
              />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
        <Paper
          sx={{
            bgcolor: "#272727",
            border: 1,
            borderColor: "#A2A2A2",
            pr: 2,
            pb: 2,
            width: "100%",
          }}
        >
          <Typography sx={{color: "#f0f0f0", py: 1, px: 1, ml: 4, pb: 4}}>
            Humidity
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataHu}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#f0f0f0" />
              <YAxis stroke="#f0f0f0" />
              <Tooltip />
              <Legend
                iconType="plainline"
                wrapperStyle={{color: "white !important", paddingTop: 2}}
              />
              <Line
                type="monotone"
                dataKey="Humidity_Sensor_device01"
                stroke="#82ca9d"
              />
              <Line
                type="monotone"
                dataKey="Humidity_Sensor_device02"
                stroke="#ffb440"
              />{" "}
              <Line
                type="monotone"
                dataKey="Humidity_Sensor_device03"
                stroke="lightblue"
              />
              <Line
                type="monotone"
                dataKey="Humidity_Sensor_device04"
                stroke="orange"
              />
              <Line
                type="monotone"
                dataKey="Humidity_Sensor_device05"
                stroke="#FC4F4F"
              />
              <Line
                type="monotone"
                dataKey="Humidity_Sensor_device06"
                stroke="#D36CFF"
              />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Stack>

      <Stack
        sx={{mt: 1}}
        direction={{md: "row", xs: "column"}}
        spacing={1}
        alignItems={"flex-start"}
        justifyContent={"start"}
      >
        <Paper
          sx={{
            bgcolor: "#272727",
            border: 1,
            borderColor: "#A2A2A2",
            pr: 2,
            pb: 2,
            width: "100%",
          }}
        >
          <Typography sx={{color: "#f0f0f0", py: 1, px: 1, ml: 4, pb: 4}}>
            Soil_Temperature
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataTemSoil}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#f0f0f0" />
              <YAxis stroke="#f0f0f0" />
              <Tooltip />
              <Legend
                iconType="plainline"
                wrapperStyle={{color: "white !important", paddingTop: 2}}
              />

              <Line
                type="monotone"
                dataKey="Soil_Temperator_Sensor_Device01"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
        <Paper
          sx={{
            bgcolor: "#272727",
            border: 1,
            borderColor: "#A2A2A2",
            pr: 2,
            pb: 2,
            width: "100%",
          }}
        >
          <Typography sx={{color: "#f0f0f0", py: 1, px: 1, ml: 4, pb: 4}}>
            Soil_Humidity
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataHuSoil}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#f0f0f0" />
              <YAxis stroke="#f0f0f0" />
              <Tooltip />
              <Legend
                iconType="plainline"
                wrapperStyle={{color: "white !important", paddingTop: 2}}
              />

              <Line
                type="monotone"
                dataKey="Soil_Humidity_Sensor_device01"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        </Paper>
      </Stack>
    </>
  );
}
