import { Box } from "@mui/material";
import RainbowFrame from "../../components/RainbowFrame";

const Rainbow = () => {

  const colors = ['red', 'orange', 'purple', 'blue', 'green', 'gray'];

  return (
    <Box
      id='container'
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <RainbowFrame colors={colors}>
        <b>ЗАГОЛОВОК</b>
      </RainbowFrame>
    </Box>
  );
}

export default Rainbow;