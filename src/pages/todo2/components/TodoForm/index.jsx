import React from "react";
import { AddCircle } from '@mui/icons-material';
import { Box, IconButton, TextField } from "@mui/material";


const TodoForm = ({ todo, handleChange, add }) => {
  return (
    <Box className="addTodos">
      <TextField
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
        InputProps={{
          endAdornment: (
            <IconButton
              className="add-btn"
              onClick={add}
              size="small"
            >
              <AddCircle
                fontSize="large"
                color="warning"
              />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

//we can use connect method to connect this component with redux store
export default TodoForm;