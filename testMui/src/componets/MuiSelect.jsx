import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);
  const handleChange = (e) => {
    const values = e.target.value;
    setCountries(typeof values === "string" ? values.split(",") : values);
  };
  return (
    <Box width="200px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="secondary"
        helperText="Please select a country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Austraia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
