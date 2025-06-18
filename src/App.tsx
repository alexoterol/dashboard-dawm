import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from '@mui/material/Grid';
import { Box, Typography, Paper } from '@mui/material';

const widgetStyles = [
  { backgroundColor: '#FF6F61', color: 'white' }, // Coral
  { backgroundColor: '#6B5B95', color: 'white' }, // Indigo
  { backgroundColor: '#88B04B', color: 'white' }, // Verde claro
  { backgroundColor: '#F7CAC9', color: '#333' },  // Rosa claro
];


function App() {
  return (
    <Box sx={{ padding: 3, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Grid container spacing={3}>
        {/* Encabezado */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2, bgcolor: '#1976d2', color: 'white' }}>
            <Typography variant="h4" align="center">
              Encabezado del Dashboard
            </Typography>
          </Paper>
        </Grid>

        {/* Alertas */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2, bgcolor: '#f44336', color: 'white' }}>
            <Typography variant="h6" align="center">
              Alertas importantes
            </Typography>
          </Paper>
        </Grid>

        {/* Selector */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Selector
            </Typography>
            {/* Aquí podrías poner un Select o cualquier control */}
            <Box sx={{ bgcolor: '#e3f2fd', height: 100, borderRadius: 1 }} />
          </Paper>
        </Grid>

        {/* Indicadores */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Indicadores
            </Typography>
            {/* Aquí podrían ir varios indicadores */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ bgcolor: '#c8e6c9', flex: 1, height: 100, borderRadius: 1 }} />
              <Box sx={{ bgcolor: '#ffe0b2', flex: 1, height: 100, borderRadius: 1 }} />
              <Box sx={{ bgcolor: '#bbdefb', flex: 1, height: 100, borderRadius: 1 }} />
            </Box>
          </Paper>
        </Grid>

        {/* Gráfico */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Gráfico
            </Typography>
            <Box sx={{ bgcolor: '#fce4ec', height: '100%', borderRadius: 1 }} />
          </Paper>
        </Grid>

        {/* Tabla */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Tabla de datos
            </Typography>
            <Box sx={{ bgcolor: '#ede7f6', height: '100%', borderRadius: 1 }} />
          </Paper>
        </Grid>

        {/* Información adicional */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2, bgcolor: '#b2dfdb' }}>
            <Typography variant="h6" align="center">
              Información adicional
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
