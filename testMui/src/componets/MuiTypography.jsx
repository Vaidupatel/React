import { Typography } from "@mui/material";
const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 Heading Typography</Typography>
      <Typography variant="h2">H2 Heading Typography</Typography>
      <Typography variant="h3">H3 Heading Typography</Typography>
      <Typography variant="h4" component="h1" gutterBottom>H4 Heading Typography</Typography>
      <Typography variant="h5">H5 Heading Typography</Typography>
      <Typography variant="h6">H6 Heading Typography</Typography>

      <Typography variant="subtitile1">Subtitile 1</Typography>
      <Typography variant="subtitile2">Subtitile 2</Typography>

      <Typography variant="body1">
        Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo,
        quibusdam perferendis qui cumque incidunt ex ipsa dolorem consectetur
        fugiat? Non.
      </Typography>
      <Typography variant="body2">
        Body 2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
        dolores totam blanditiis dolore harum hic alias doloribus fugiat dicta
        accusamus.
      </Typography>
    </div>
  );
};

export default MuiTypography;
