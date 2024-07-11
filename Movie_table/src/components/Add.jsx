import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {


    const [formData, setFormData] = useState({
        name: '',
        director: '',
        category: '',
        releaseYear: '',
        poster: '',
      });

      function valueCap(e){
        setFormData({...formData,[e.target.name]:e.target.value})
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '10px',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        name="name"
        label="Movie Name"
        variant="outlined"
        value={formData.name}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
        onChange={valueCap}
      />
      <TextField
        id="category"
        name="category"
        label="Category"
        variant="outlined"
        value={formData.category}
        onChange={valueCap}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <TextField
        id="director"
        name="director"
        label="Director"
        variant="outlined"
        value={formData.director}
        onChange={valueCap}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <TextField
        id="year"
        name="year"
        label="Release Year"
        type="number"
        variant="outlined"
        value={formData.releaseYear}
        onChange={valueCap}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <TextField
        id="poster"
        name="poster"
        label="Poster"
        variant="outlined"
        value={formData.poster}
        onChange={valueCap}
        InputLabelProps={{ style: { color: '#fff' } }}
        InputProps={{ style: { color: '#fff', backgroundColor: '#555' } }}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  )
}

export default Add