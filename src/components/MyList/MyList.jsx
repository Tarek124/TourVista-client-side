import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AppContext } from "../../context/AuthContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MyList() {
  const { user } = useContext(AppContext);
  const data = useLoaderData();

  const filterData = data.filter((x) => x?.email === user?.email);
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:mt-4 py-4 ">
        My List
      </h1>
      <div>
        {filterData.map((spots) => (
          <div key={spots._id} className="my-5">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
