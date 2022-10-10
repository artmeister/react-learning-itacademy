import cls from './TodoListItem.module.scss';

import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';


const TodoListItem = (props) => {

  const handleToggle = () => props.onToggle()
  const deleteTask = () => props.onDelete()
  const favoriteTask = () => props.toggleFavorite()

  return (
    <ListItem
      disablePadding
      onClick={handleToggle}
    >
      <ListItemText
        className={`
          ${props.done ? cls.task_is_done : ''}
          ${props.important ? cls.important : ''}
        `}
        primary={props.text}
        sx={{paddingRight:6}}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="delete" onClick={deleteTask}>
          <DeleteIcon />
        </IconButton>
        <IconButton edge="end" aria-label="important" onClick={favoriteTask}>
          <StarIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoListItem;