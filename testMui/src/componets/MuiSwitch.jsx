import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked)
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={checked} onChange={handleChange} size="large" color="success"/>}
      />
    </Box>
  );
};

export default MuiSwitch;
