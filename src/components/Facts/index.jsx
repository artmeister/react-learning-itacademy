import axios from "axios";
import { useEffect, useState } from "react";

import {
  Alert,
  FormControl,
  TextField,
  Button,
  Box,
} from '@mui/material';


const Facts = () => {
  const [name, setName] = useState("artiom");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [click, setClick] = useState(false);

  const apis = [
    `https://api.agify.io/?name=${name}`,
    `https://api.nationalize.io/?name=${name}`,
    `https://api.genderize.io/?name=${name}`
  ];

  const getData = async () => {
    await Promise.allSettled(apis.map(api => axios(api)))
      .then(results => {
        results.forEach((result, num) => {
          if (result.status === "fulfilled") {
            if (result.value.data.age) setAge(result.value.data.age);
            if (result.value.data.country) setCountry(result.value.data.country[0].country_id);
            if (result.value.data.gender) setGender(result.value.data.gender);
          }
          if (result.status === "rejected") return alert(`${apis[num]}: ${result.reason}`)
        });
      });
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        width: 300,
        border: '1px solid black',
        margin: '0 auto',
        borderRadius: 3,
        padding: 2,

        '& .MuiTextField-root': { m: 1 }
      }}
    >
      <FormControl>
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          label="Имя"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <Button
        variant="contained"
        onClick={() => setClick((prev) => !prev)}
        sx={{
          margin: '1rem auto 0',
        }}
      >
        Получить информацию о пользователе
      </Button>

      <Alert
        severity="info"
        sx={{
          margin: '1.5rem auto 0',
        }}
      >
        {!age && !country && !gender ? "Введите имя" : 
          <>
            <p>Возраст: {age}</p>
            <p>Страна: {country}</p>
            <p>Пол: {gender === 'male' ? 'Мужчина' : 'Женщина'}</p>
          </>
        }
      </Alert>
    </Box>
  );
};

export default Facts;