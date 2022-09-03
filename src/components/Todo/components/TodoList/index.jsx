import cls from './TodoList.module.scss';

import List from '@mui/material/List';

import TodoListItem from '../TodoListItem';

const TodoList = ({ todoListItems, onToggle, onDelete, toggleFavorite }) => {

  return (
    <List className={cls.tasks}>
      {todoListItems.map(item => {
        return (
          <TodoListItem
            {...item}
            key={item.id}
            onToggle={() => onToggle(item.id)}
            onDelete={() => onDelete(item.id)}
            toggleFavorite={() => toggleFavorite(item.id)}
          />
        )
      })}
    </List>
  )
}

export default TodoList;