import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    width: '100%',
    height: '100%',
  },
  media: {
    textAlign: 'center',
  },
  avatar: {
    backgroundColor: '#2196F3',
  },
  source: {
    src: null,
  },
});

function WeatherCamContainer(props) {
  const { classes } = props;
  return (
    <Fragment>
      <h2>Colorado Web Cams</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardHeader
              className="card-header"
              avatar={
                <Avatar className={classes.avatar}>
                  B
                </Avatar>
              }
              title="Boulder Live Weather Cam"
            />
          <CardMedia className={classes.media} src={classes.source}>
            <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/G2b6B8ZExmo?si=tZAVvfJcmulQzymN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </CardMedia>
            <CardContent>
              <Typography component="p">
                Live views from Pearl Street in Boulder.  The flatirons, flagstaff, Sanitas, West Pearl street view and finally the view to the east.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar className={classes.avatar}>
                  F
                </Avatar>
              }
              title="Boulder Flatirons Cam"
            />
          <CardMedia className={classes.media} src={classes.source}>
          <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/QXHEQqEbec0?si=vE5TeNUUM06UTA72" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </CardMedia>
            <CardContent>
              <Typography component="p">
                Located in Louisville, this cam provides sweeping views of the Boulder "Skyline", spanning from Eldorado Canyon to Longs Peak.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Fragment>
  );
}

WeatherCamContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherCamContainer);
