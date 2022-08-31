import cls from './TodoList.module.scss';

import List from '@mui/material/List';

import TodoListItem from '../TodoListItem';

const TodoList = () => {

  const arrList = [
    {
      id: 1,
      todoCount: 10,
      important: false,
      done: false
    },
    {
      id: 2,
      todoCount: 20,
      important: false,
      done: false
    },
    {
      id: 3,
      todoCount: 30,
      important: false,
      done: false
    },
    {
      id: 4,
      todoCount: 40,
      important: false,
      done: false
    },
    {
      id: 5,
      todoCount: 50,
      important: false,
      done: false
    }
  ]

  return (
    <List className={cls.tasks}>
      {arrList.map( item => {
        return (
          <TodoListItem key={item.id} {...item} />
        )
      })}
    </List>
  )
}

export default TodoList;