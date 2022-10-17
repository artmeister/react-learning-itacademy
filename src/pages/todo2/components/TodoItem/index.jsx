import React, { useRef } from "react";
import {
  Box,
  ButtonGroup,
  IconButton,
  TextareaAutosize
} from '@mui/material';
import { Edit, DoneAll, Close, Star, StarBorder } from '@mui/icons-material';

const TodoItem = ({ item, updateTodo, removeTodo, completeTodo, importantTodo }) => {
  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <Box
      key={item.id}
      className="card"
    >
      <TextareaAutosize
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.text}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        minRows={5}
      />
      <ButtonGroup className="btns">
        {!item.important ?
          <IconButton
            style={{ color: '#271c6c' }}
            onClick={() => importantTodo(item.id)}
          >
            <StarBorder />
          </IconButton>
        : <IconButton
            color="warning"
            onClick={() => importantTodo(item.id)}
          >
            <Star />
          </IconButton>}
        <IconButton
          style={{ color: '#271c6c' }}
          onClick={() => changeFocus()}>
          <Edit />
        </IconButton>
        {!item.done ?
          <IconButton
          style={{ color: '#271c6c' }}
            onClick={() => completeTodo(item.id)}
          >
            <DoneAll />
          </IconButton>
        : <IconButton
            color="success"
            onClick={() => completeTodo(item.id)}
          >
            <DoneAll />
          </IconButton>}
        <IconButton
          color="error"
          onClick={() => removeTodo(item.id)}
        >
          <Close />
        </IconButton>
      </ButtonGroup>
      {item.done && <span className="completed">done</span>}
    </Box>
  );
};

export default TodoItem;