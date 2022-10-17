import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { addTodos } from "../../redux/todoSlice";
import { Box } from "@mui/material";

import "./index.scss";
import TodoSearch from "./components/TodoSearch";
import TodoForm from "./components/TodoForm";
import TodoTabs from "./components/TodoTabs";
import TodoList from "./components/TodoList";


const Todos = ({ addTodo }) => {
  const todoList = useSelector(state => state.todo);

  const [todo, setTodo] = useState("");
  const [count, setCount] = useState(1);
  const [sort, setSort] = useState("all");
  const [searchList, setSearchList] = useState(todoList);

  const allTodo = () => setSort('all');
  const activeTodo = () => setSort('active');
  const completedTodo = () => setSort('completed');
  const importantTodo = () => setSort('important');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    setCount(prevCount => ++prevCount)

    if (todo === "") {
      alert("Input is Empty");
    } else {
      addTodo({
        id: Math.floor(Math.random() * 1000),
        text: todo,
        done: false,
        important: false,
      });
      setTodo("");
      setSearchList(todoList);
    }
  };

  const onSearch = (value) => {
    const searchTodos = todoList.filter(todo => {
      return todo.text.toLowerCase().includes(value.toLowerCase())
    })

    setSearchList(searchTodos)
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
      <TodoSearch onSearch={onSearch} />

      <TodoForm
        todo={todo}
        handleChange={handleChange}
        add={add}
      />

      <TodoTabs
        allTodo={allTodo}
        activeTodo={activeTodo}
        completedTodo={completedTodo}
        importantTodo={importantTodo}
      />

      <TodoList sort={sort} todoList={searchList} />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);