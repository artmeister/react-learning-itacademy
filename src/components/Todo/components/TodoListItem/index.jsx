import { useState } from 'react';
import cls from './TodoListItem.module.scss';

import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Checkbox
} from '@mui/material';

const TodoListItem = (props) => {
  const [checked, setChecked] = useState([0]);

  const [isTrash, setTrash] = useState(props.done);
  const [isFavorite, setFavorite] = useState(props.important);

  const handleClickTrash = () => {
    if (isFavorite) setFavorite(!isFavorite);

    setTrash((previousState) => !previousState);
  }

  const handleClickStar = () => {
    if (isTrash) setTrash(!isTrash);

    setFavorite((previousState) => !previousState);
  }

  const handleToggle = (props) => () => {
    const currentIndex = checked.indexOf(props.todoCount);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(props.todoCount);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  }

  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton aria-label="delete" onClick={handleClickTrash}>
            <DeleteIcon />
          </IconButton>
          <IconButton edge="end" aria-label="important" onClick={handleClickStar}>
            <StarIcon />
          </IconButton>
        </>
      }
      disablePadding
    >
      <ListItemButton onClick={handleToggle(props)}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(props.todoCount) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText className={`${isTrash ? cls.task_is_done : ''}${isFavorite ? cls.important : ''}`} primary={`Task ${props.todoCount}`} sx={{paddingRight:6}} />
      </ListItemButton>
    </ListItem>
  );
}

export default TodoListItem;