// src/components/GraficoUI.tsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { Typography, Box } from '@mui/material';

interface DataPoint {
  time: string;
  temperature: number;
}

interface GraficoProps {
  data: DataPoint[];
}

export default function GraficoUI({ data }: GraficoProps) {
  return (
    <Box width="100%">
      <Typography variant="h6" sx={{ mb: 2 }}>
        Temperatura por hora
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis unit="°C" />
          <Tooltip />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
