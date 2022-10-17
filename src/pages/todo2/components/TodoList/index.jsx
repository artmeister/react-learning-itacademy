import React from "react";
import { Grid } from '@mui/material';
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  importantTodos,
  removeTodos,
  updateTodos,
} from "../../../../redux/todoSlice";
import TodoItem from "../TodoItem";
import { useSelector } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    completeTodo: (id) => dispatch(completeTodos(id)),
    importantTodo: (id) => dispatch(importantTodos(id)),
  };
};

const TodoList = ({ todoList, sort, updateTodo, removeTodo, completeTodo, importantTodo }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {todoList.length > 0 && sort === "active"
        ? todoList.map((item) => {
            return (
              item.done === false && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  completeTodo={completeTodo}
                  importantTodo={importantTodo}
                />
              )
            );
          })
        : null}
      {todoList.length > 0 && sort === "completed"
        ? todoList.map((item) => {
            return (
              item.done === true && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  completeTodo={completeTodo}
                  importantTodo={importantTodo}
                />
              )
            );
          })
        : null}
      {todoList.length > 0 && sort === "important"
        ? todoList.map((item) => {
            return (
              item.important === true && (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={removeTodo}
                  updateTodo={updateTodo}
                  completeTodo={completeTodo}
                  importantTodo={importantTodo}
                />
              )
            );
          })
        : null}
      {todoList.length > 0 && sort === "all"
        ? todoList.map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
                completeTodo={completeTodo}
                importantTodo={importantTodo}
              />
            );
          })
        : null}
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);