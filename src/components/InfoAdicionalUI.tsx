import { Paper, Typography } from '@mui/material';

interface InfoProps {
  message: string;
}

export default function InfoAdicionalUI({ message }: InfoProps) {
  return (
    <Paper elevation={2} sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="body1">{message}</Typography>
    </Paper>
  );
}