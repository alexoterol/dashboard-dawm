// src/components/TablaUI.tsx

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

interface ForecastDay {
  date: string;
  maxTemp: number;
  minTemp: number;
}

interface TablaProps {
  data: ForecastDay[];
}

export default function TablaUI({ data }: TablaProps) {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Pronóstico semanal
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell align="right">Temp. Máx (°C)</TableCell>
            <TableCell align="right">Temp. Mín (°C)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.maxTemp}</TableCell>
              <TableCell align="right">{row.minTemp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
