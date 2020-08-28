import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import { Grid, Card } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
export default (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      {props.cards.map((cards, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="image"
                height="140"
                image={cards.links.mission_patch}
                title="Contemplative Reptile"
              />
              <CardMedia component="p">{` ${cards.mission_name} #${cards.flight_number}`}</CardMedia>
              <CardMedia>{`Mission Ids :`}</CardMedia>
              {cards.mission_id.map((mission, i) => (
                <li>{mission}</li>
              ))}
              <CardMedia>{`Launch Year : ${cards.launch_year}`}</CardMedia>
              <CardMedia>{`Successful Launch :${cards.launch_success}`}</CardMedia>
              <CardMedia>{`Successful Landing :${cards.rocket.first_stage.cores[0].land_success}`}</CardMedia>
            </CardActionArea>
          </Card>
          {/* {`Developed By : AnuPrasanthi.p`} */}
        </Grid>
      ))}
      {`Developed By : AnuPrasanthi.p`} 
    </Grid>
  );
};
