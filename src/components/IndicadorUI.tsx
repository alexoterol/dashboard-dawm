// src/components/IndicadorUI.tsx

import { Card, CardContent, Typography, Box } from '@mui/material';

interface IndicadorProps {
  title: string;
  value: number | string;
  unit?: string;
}

export default function IndicadorUI({ title, value, unit }: IndicadorProps) {
  return (
    <Card sx={{ minWidth: 140, textAlign: 'center' }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary">
          {title}
        </Typography>
        <Box>
          <Typography variant="h5" component="div">
            {value} {unit}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
