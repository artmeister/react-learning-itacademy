import { useState } from 'react';
import cls from './TodoForm.module.scss';

import {
  TextField,
  Button,
  FormControl,
} from '@mui/material';


const TodoForm = ({ onAdded }) => {
  const [taskName, setTaskName] = useState('');

  const onAddedTask = (e) => {
    e.preventDefault();
    
    if(!!taskName) {
      onAdded(taskName);
      setTaskName('');
    }
  }

  // const changeTaskName = (e) => {
  //   setTaskName(e.target.value)
  // }

  return (
    <form className={cls.TodoForm} onSubmit={onAddedTask}>
      <FormControl sx={{
        flexDirection: 'row',
        gap: 1,
        minWidth: 300,
      }}>
        <TextField 
          variant="outlined"
          value={taskName}
          placeholder="Введите задачу"
          onChange={e => setTaskName(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          disabled={taskName === ''}
          className={cls.TodoForm__button}
        >
          Добавить
        </Button>
      </FormControl>
    </form>
  )
}

export default TodoForm;