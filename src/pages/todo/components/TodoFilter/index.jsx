import { useState } from 'react';
// import cls from './TodoFilter.module.scss';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const TodoFilter = () => {
  const [select, setSelect] = useState('All');

  const handleChange = (event, newSelect) => {
    setSelect(newSelect);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > :not(style) + :not(style)': { mt: 2 },
      }}
    >
      <ToggleButtonGroup
        value={select}
        exclusive
        onChange={handleChange}
        size="large"
        aria-label="Large sizes">
        <ToggleButton value="All" key="All">
          All
        </ToggleButton>,
        <ToggleButton value="Important" key="Important">
          Important
        </ToggleButton>,
        <ToggleButton value="Done" key="Done">
          Done
        </ToggleButton>,
      </ToggleButtonGroup>
    </Box>
  )
}

export default TodoFilter;