import { Box, Card, CardActions, CardContent, Typography,Button, CardMedia } from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
        component="img"
        height="140px"
        image="http://source.unsplash.com/random"
        alt="Unsplash Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">React</Typography>
          <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati nobis doloremque, nulla ducimus suscipit quaerat aliquid illum in eveniet architecto, deleniti officiis. Libero, tenetur! Perspiciatis corporis dolorum repellendus blanditiis!</Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Lern More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
