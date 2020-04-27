import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

import { Button, Container, Grid, Typography, CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  featuredImage: {
    maxWidth: '100%',
    borderRadius: '500px'
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">

      <CssBaseline />
      <Navigation />
      <main>
        {/* BEGIN Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              My Portfolio
            </Typography>
            
            <Grid container spacing={8} justify="center">
              <Grid item xs={12} md={4} align="center">
                <img src="/assets/img/nick-routsong-512.jpg" className={classes.featuredImage} alt="Nick Routsong" />
              </Grid>
              <Grid item xs={12} md={8}>
              <Typography variant="body1" align="left" color="textSecondary" paragraph>
              My first encounter with coding came out of necessity. The year was 1999 and I needed to build a website for my favorite video game, Warcraft II: Battle.net Edition. I decided that *hacks* and cheat codes were going to draw in the masses, and so that’s what I focused on. Using Microsoft Frontpage and Geocities, I cobbled together my first site and posted the URL to the Battle.net channels. To my parents' shock, I ended up making $1-2K in ad revenue, which I quickly traded in for a new TV and stereo system for my bedroom. Priorities!
              </Typography>
              <Typography variant="body1" align="left" color="textSecondary" paragraph>
              From there, I continually found myself presented with opportunities to learn more about web development until it turned from a hobby, to a part-time job, to a career. I’ve now had over 13 years of professional web development experience. I’ve worked with small companies and startups as a full stack developer as well as part of a team of developers working at a large automotive manufacturer to transition their monolithic application into a microservices architecture. Everyday, I’m working with WordPress, Laravel, and React to create innovative solutions for clients in multiple industries including automotive part sales, content blogs, food services, property management and more.        
              </Typography>
              </Grid>
            </Grid>
            
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    View my LinkedIn
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    View my GitHub
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* END Hero unit */}
        <Portfolio />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;
