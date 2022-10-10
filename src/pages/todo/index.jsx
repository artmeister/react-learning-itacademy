// import cls from './Todo.module.scss';
import { useState } from 'react';
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

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: 'Task 1',
      important: false,
      done: false
    },
    {
      id: 2,
      text: 'Task 2',
      important: false,
      done: false
    }
  ]);
  const [filterList, setFilteList] = useState(todoList);
  const [count, setCount] = useState(100);
  const done = todoList.filter((todo) => todo.done).length;
  const important = todoList.filter((todo) => todo.important).length;

  const onToggle = (id) => {
    const todoElements = todoList.map((todo) => {
      if (todo.id === id) todo.done = !todo.done;

      return todo;
    })

    setTodoList(todoElements);
  }

  const onDelete = (id) => {
    const todoDeleting = todoList.filter((todo) => todo.id !== id);

    setTodoList(todoDeleting);
  }

  const toggleFavorite = (id) => {
    const todoElements = todoList.map((todo) => {
      if (todo.id === id) todo.important = !todo.important;

      return todo;
    })

    setTodoList(todoElements);
  }

  const onAdded = (value) => {
    setCount(prevCount => ++prevCount)
    const addTodos = [...todoList,
      {
        id: count,
        text: value,
        important: true,
        done: false
      }
    ]

    setTodoList(addTodos);
    setFilteList(addTodos);
  }

  const onSearch = (value) => {
    const searchTodos = filterList.filter(todo => {
      return todo.text.toLowerCase().includes(value.toLowerCase())
    })

    setTodoList(searchTodos);
  }

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
          <Badge badgeContent={important} color="secondary">
            <ListIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="list">
          <Badge badgeContent={done} color="secondary">
            <PlaylistAddCheckIcon />
          </Badge>
        </IconButton>
      </div>

      <TodoSearch onSearch={onSearch} />
      <TodoFilter />
      <TodoList
        todoListItems={todoList}
        onToggle={onToggle}
        onDelete={onDelete}
        toggleFavorite={toggleFavorite}
      />
      <TodoForm onAdded={onAdded} />
    </Box>
  )
}

export default Todo;