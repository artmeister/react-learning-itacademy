import { Box } from "@mui/material";
import RainbowFrame from "../../components/RainbowFrame";

const Rainbow = () => {

  const text = 'Заголовок';
  const colors = ['red', 'orange', 'purple', 'blue', 'yellow', 'gray'];

  return (
    <Box
      id='container'
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <RainbowFrame colors={colors}>
        {text}
      </RainbowFrame>
    </Box>
  );
}

export default Rainbow;