// import cls from './Todo.module.scss';
import {
  Box,
  Badge,
  IconButton,
} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

import TodoSearch from './components/TodoSearch';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const Todo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style) + :not(style)': { mt: 2 },
      }}
    >
      <h1>Todo App</h1>
      <div>
        <IconButton aria-label="list">
          <Badge badgeContent={2} color="secondary">
            <ListIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="list">
          <Badge badgeContent={5} color="secondary">
            <PlaylistAddCheckIcon />
          </Badge>
        </IconButton>
      </div>

      <TodoSearch />
      <TodoFilter />
      <TodoList />
      <TodoForm />
    </Box>
  )
}

export default Todo;