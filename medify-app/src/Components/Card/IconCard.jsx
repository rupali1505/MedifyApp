import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function IconCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={props.img} alt={props.title} />
        <CardContent sx={{ padding: 0 }}>
          <Typography color="#ABB6C7">{props.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
