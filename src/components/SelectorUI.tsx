import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { type SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

interface SelectorUIProps {
    callback?: (city: string) => void;
}

export default function SelectorUI(props: SelectorUIProps) {
    const [cityInput, setCityInput] = useState('');
    const handleChange = (event: SelectChangeEvent<string>) => {
        setCityInput(event.target.value)
        props.callback && props.callback(event.target.value);
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="city-select-label">Ciudad</InputLabel>
            <Select
                labelId="city-select-label"
                id="city-simple-select"
                label="Ciudad"
                value={cityInput}
                onChange={handleChange}>
                <MenuItem disabled><em>Seleccione una ciudad</em></MenuItem>
                <MenuItem value={"guayaquil"}>Guayaquil</MenuItem>
                <MenuItem value={"quito"}>Quito</MenuItem>
                <MenuItem value={"manta"}>Manta</MenuItem>
                <MenuItem value={"cuenca"}>Cuenca</MenuItem>
            </Select>
            {cityInput && (
                <p>
                    Información del clima en <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{cityInput}</span>
                </p>
            )}

        </FormControl>
    )
}