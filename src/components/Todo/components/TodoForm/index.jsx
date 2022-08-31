import { useState } from 'react';
import cls from './TodoForm.module.scss';

import {
  TextField,
  Button,
  FormControl,
} from '@mui/material';

const TodoForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!!taskName) {
      alert(taskName)
      setTaskName('')
    }
  }

  return (
    <form className={cls.TodoForm} onSubmit={handleSubmit}>
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