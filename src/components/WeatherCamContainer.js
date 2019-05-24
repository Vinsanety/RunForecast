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
    // maxWidth: 350,
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
  sectionHeader: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing.unit,
    margin: '2rem 0 1rem 0',
    fontSize: '1.125rem',
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2)',
    borderRadius: '4px',
  }
});

{/* const cardData = [
  {
    img: `https://youtu.be/Fq68_K0YlIA`,
    title: 'Denver City Live Cam',
    author: 'author',
  },
  {
    img: `https://youtu.be/pM7R7EArdzo`,
    title: 'Breckenridge Live Cam',
    author: 'author',
  },
]; */}

function WeatherCamContainer(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.sectionHeader}>{"Colorado Web Cams"}</div>
      <Grid container spacing={16}>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              className="card-header"
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  D
                </Avatar>
              }
              title="Denver Live Weather Cam"
            />
          <CardMedia className={classes.media} src={classes.source}>
              <iframe title="Denver City Live Cam" src="https://www.youtube-nocookie.com/embed/Fq68_K0YlIA?autoplay=1" frameBorder="0" width="auto" height="100%" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </CardMedia>
            <CardContent>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  G
                </Avatar>
              }
              title="Boulder Flatirons Cam"
            />
          <CardMedia className={classes.media} src={classes.source}>
            <iframe title="Boulder Flatirons Cam" width="auto" height="100%" src="https://lookr.com/1193938385" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </CardMedia>
            <CardContent>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  B
                </Avatar>
              }
              title="Breckenridge Mountain Cam"
            />
          <CardMedia className={classes.media} src={classes.source}>
              <iframe title="Breckenridge Mountain Cam" src="https://www.youtube-nocookie.com/embed/pM7R7EArdzo?autoplay=1" width="auto" height="100%"  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </CardMedia>
            <CardContent>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  D
                </Avatar>
              }
              title="Durango City Cam"
            />
          <CardMedia className={classes.media} src={classes.source}>
            <iframe title="Durango City Cam" src="https://www.youtube-nocookie.com/embed/NeHa4JHfB1A?autoplay=1" width="auto" height="100%"  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </CardMedia>
            <CardContent>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  T
                </Avatar>
              }
              title="Telluride City Cam"
            />
          <CardMedia className={classes.media} src={classes.source}>
            <iframe title="Telluride City Cam" width="auto" height="100%" src="https://www.youtube-nocookie.com/embed/Fhj-oPwX1bo?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </CardMedia>
            <CardContent>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  G
                </Avatar>
              }
              title="Glenwood Springs Cam"
            />
          <CardMedia className={classes.media} src={classes.source}>
            <iframe title="Glenwood Springs Cam" width="auto" height="100%" src="https://www.youtube-nocookie.com/embed/gDPnP_gJf_A?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </CardMedia>
            <CardContent>
              <Typography component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
      <div className={classes.sectionHeader}>{"Utah Web Cams"}</div>
    </Fragment>
  );
}

WeatherCamContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherCamContainer);


{/*{tileData.map(tile => (
  <GridListTile key={tile.img}>
    <img src={tile.img} alt={tile.title} />
    <GridListTileBar
      title={tile.title}
      subtitle={<span>by: {tile.author}</span>}
      actionIcon={
        <IconButton className={classes.icon}>
          <InfoIcon />
        </IconButton>
      }
    />
  </GridListTile>
))}*/}
