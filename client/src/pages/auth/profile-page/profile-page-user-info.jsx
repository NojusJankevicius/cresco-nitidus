import React from 'react';
import {
  Box,
  Typography,
  TextField,
} from '@mui/material';

const ProfilePageUserInfo = ({ formik }) => {
  const { values, handleChange } = formik;
  const userFieldsData = [
    { name: 'name', label: 'Vardas', value: values.name },
    { name: 'surname', label: 'Pavardė', value: values.surname },
    { name: 'email', label: 'El. paštas', value: values.email },
    // {name: 'city', label: 'Miestas', value: values.city },
    // {name: 'number', label: 'Telefono numeris', value: values.mobile },
  ];

  return (
    <Box>
      <Box sx={{ py: 5 }}>
        <Typography variant="h6">Vartotojo informacija</Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: 3,
        flexDirection: 'column',
      }}
      >
        {userFieldsData.map(({ name, value, label }) => (
          <TextField
            key={name}
            fullWidth
            id="outlined-size-small"
            label={label}
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
            name={name}
            value={value}
            onChange={handleChange}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProfilePageUserInfo;
