import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const skills = ["html", "css", "js", "ts", "react"];

const skillsOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
const MuiAutoComplete = () => {
  const [value, setValue] = useState(null);
  const [skill, setskill] = useState(null);
  //   console.log(value);
  console.log({ skill });
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        freeSolo
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
      <Autocomplete
        value={skill}
        onChange={(e, newValue) => {
          setskill(newValue);
        }}
        options={skillsOption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
