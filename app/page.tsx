"use clinet";

import TemperatureHumidity from "@/components/organism/TemperatureHumidity";
import TotalSensor from "@/components/organism/TotalSensor";
import {
  Box,

} from "@mui/material";



export default function Home() {
  return (
    <Box component={"div"} sx={{maxWidth: "100%"}}>
      <TotalSensor />
      <TemperatureHumidity />
    </Box>
  );
}
