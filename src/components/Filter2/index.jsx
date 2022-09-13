import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import superagent from 'superagent';
import {
  Autocomplete,
  TextField,
  Box,
  Checkbox,
} from '@mui/material';


const Filter = () => {

  // const baseURL = "https://jsonplaceholder.typicode.com/albums";
  
  //SuperAgent

  // useEffect(() => {
  //   superagent
  //     .get(baseURL)
  //     .then((response) => setFilms(response.body))
  //     .catch(err => console.log('Error: ', err.message));
  // }, []);

  //AXIOS

  // useEffect(() => {
  //   axios.get(baseURL)
  //     .then((response) => setFilms(response.data))
  //     .catch(err => console.log('Error: ', err.message))
  // }, []);

  //Fetch

  // const fetchData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/albums");

  //   if (response.status !== 200) throw new Error("cannot fetch data");
  //   else return response.json();
  // };

  // useEffect(() => {
  //   fetchData()
  //     .then((response) => {
  //       setFilms(response);
  //     })
  //     .catch((err) => {
  //       console.log("rejected", err.message);
  //     });
  // }, []);

  // eslint-disable-next-line no-unused-vars
  const [films, setFilms] = useState([
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    }
  ]);

  const options = films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const [checked, setChecked] = useState(false);

  const onChangeCheck = () => {
    setChecked(prevCheck => !prevCheck);
  };

  const onInputChange = (event, value, reason) => {
    if (reason === "input") console.log(event.target.value);
    if (reason === "reset") console.log(value);
    if (reason === "clear") setChecked(false);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: 300
      }}
    >
      <Autocomplete
        id="grouped-demo"
        options={checked ? options.sort((a, b) => -b.title.localeCompare(a.title)) : films}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title ?? ''}
        renderInput={(params) => <TextField {...params} label="Поиск" />}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        sx={{ width: 300 }}
        disableCloseOnSelect
        open
        clearOnBlur={false}
        onInputChange={onInputChange}
        freeSolo
      />
      <Checkbox
        checked={checked}
        onChange={onChangeCheck}
      />
    </Box>
  );
}

export default Filter;