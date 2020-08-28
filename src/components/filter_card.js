import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid, Card, CardActionArea, CardHeader } from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  button: {
    backgroundColor: "#aed581",
  },
});
const years = [
  "2006",
  "2007",
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
];
export default (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      className='grid_1'
    >
      <Card className={classes.root}>
        <CardHeader title="Filters" subheader={`Launch Year`} />
        <Grid item xs={12} sm={6} md={3}>
          <CardActionArea>
            {years.map((year, index) => (
              <Button
                size="small"
                className={classes.button}
                onClick={props.handleYear(year)}
              >
                {year}
              </Button>
            ))}
          </CardActionArea>
        </Grid>
        <CardHeader subheader="successful Launch" />
        <Grid item xs={12} sm={6} md={3}>
          <CardActionArea>
            <Button
              size="small"
              onClick={props.handleLaunch(true)}
              className={classes.button}
            >
              true
            </Button>
            <Button
              size="small"
              onClick={props.handleLaunch(false)}
              className={classes.button}
            >
              false
            </Button>
          </CardActionArea>
        </Grid>
        <CardHeader subheader="successful Landing" />
        <Grid item xs={12} sm={6} md={3}>
          <CardActionArea>
            <Button
              size="small"
              onClick={props.handleLand(true)}
              className={classes.button}
            >
              true
            </Button>
            <Button
              size="small"
              onClick={props.handleLand(false)}
              className={classes.button}
            >
              false
            </Button>
          </CardActionArea>
        </Grid>
      </Card>
    </Grid>
  );
};
