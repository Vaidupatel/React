import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MuiButton = () => {
  const [formats, setFormats] = useState([]);
  console.log(formats);
  const handleFormatChange = (e, updatedFormats) => {
    // By default, it will recive two parameters event and updatedFormats
    // Its a primary behavior of  and toggleButtonGroup
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="http://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<LoginIcon />} disableElevation>
          Login
        </Button>
        <Button
          variant="contained"
          endIcon={<LoginIcon />}
          disableRipple
          onClick={() => {
            alert("Clicked");
          }}
        >
          Login
        </Button>
        <IconButton aria-label="login" color="secondary" size="small">
          <LoginIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="error"
          aria-label="alignment button-group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <Stack>
          <ButtonGroup variant="outlined">
            <Button
              onClick={() => {
                alert("Left Clicked");
              }}
            >
              Left
            </Button>
            <Button
              onClick={() => {
                alert("Centerd Clicked");
              }}
            >
              Center
            </Button>
            <Button
              onClick={() => {
                alert("Right Clicked");
              }}
            >
              Right
            </Button>
          </ButtonGroup>
        </Stack>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formating"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="primary"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
