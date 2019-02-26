import React from 'react';
import {
  Grid,
  GridList,
  GridListTile,
  ListSubheader,
  Typography, Avatar,
  Divider,
  GridListTileBar,
  IconButton,
  withStyles
} from '@material-ui/core';
import headshot from './Dane_Smith.png';

import cm from './cm.jpg'
import {Code, Link} from '@material-ui/icons'

const projects = [
  {
    title : "Cosmic Match",
    url : "http://cosmicmatch.net",
    img : cm,
    featured: true,
    code: "https://github.com/DoctorHowser/CosmicMatchApi"

  }
]

const styles = {

  bigAvatar: {
    margin: '10px auto',
    width: 200,
    height: 200,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  tile : {
    cursor : 'pointer'
  }
};

const Home = (props) => {
  let { classes } = props;
  return (
    <React.Fragment>
      <Grid container spacing={16} justify="center" alignItems="center">

        <Grid item xs={12}  >
          <Avatar className={classes.bigAvatar} src={headshot} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">
            Dane W Smith
          </Typography>
          <Divider variant="inset"/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">
            Teacher + Learner
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">
            Software Engineer specializing in teaching. <br/>
            Works with React, Redux, Node, Java, Spring Boot, SQL <br/>
            <br/>
            Work serves People, both in Product and in Practice
          </Typography>
        </Grid>
        <Grid item xs="6">
          <GridList cellHeight={200} spacing={1} >
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Some of my work!</ListSubheader>
            </GridListTile>
            {projects.map(tile => (
          <GridListTile className={classes.tile} onClick={() => window.open(tile.url, "_blank")}  key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton href={tile.code} target="_blank" className={classes.icon}>
                  <Code />
                </IconButton>
                
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
          </GridList>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default withStyles(styles)(Home)