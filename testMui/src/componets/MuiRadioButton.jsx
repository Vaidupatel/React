import {
  RadioGroup,
  Radio,
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormHelperText
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
};
console.log(value);
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Yers Of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size="small" color="secondary"/>} label="0-2" value="0-2" />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
