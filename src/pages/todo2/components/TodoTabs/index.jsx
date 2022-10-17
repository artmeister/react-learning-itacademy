import React from "react";
import {
  Box,
  Badge,
  ButtonGroup,
  Button
} from '@mui/material';
import { useSelector } from 'react-redux'

const TodoTabs = ({ allTodo, activeTodo, completedTodo, importantTodo }) => {

  const todo = useSelector((state) => state.todo);
  const active = todo.filter((item) => !item.done).length;
  const done = todo.filter((item) => item.done).length;
  const important = todo.filter((item) => item.important).length;

  return (
    <Box className="displaytodos">
      <ButtonGroup variant="contained" className="buttons">
        <Badge badgeContent={active} color="warning">
          <Button onClick={activeTodo}>
            Active
          </Button>
        </Badge>
        <Badge badgeContent={done} color="success">
          <Button onClick={completedTodo}>
            Completed
          </Button>
        </Badge>
        <Badge badgeContent={important} color="primary">
          <Button onClick={importantTodo}>
            Important
          </Button>
        </Badge>
        <Badge badgeContent={todo.length} color="secondary">
          <Button onClick={allTodo}>
            All
          </Button>
        </Badge>
      </ButtonGroup>
    </Box>
  );
};

export default TodoTabs;