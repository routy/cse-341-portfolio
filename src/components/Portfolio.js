
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Portfolio() {

    const [data, setData] = useState({ portfolio: [] });

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            '/api/portfolio.php',
          );console.log(result.data);
          setData(result.data);
        };
        fetchData();
      }, []);

    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Heading
                    </Typography>
                    <Typography>
                        This is a media card. You can use this section to describe the content.
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary">
                        View
                    </Button>
                    <Button size="small" color="primary">
                        Edit
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
    );
}