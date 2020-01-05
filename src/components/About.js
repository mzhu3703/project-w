import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({

    container: {
        display: 'flex',
        paddingTop: 20,
        wordWrap: 'break-word',
        // marginLeft: 10,
        // marginRight: 40,
    },

    aboutCard: {
        marginLeft: 20,
        marginRight: 10,
        flex: 1,
    },

    aboutTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    git: {
        marginRight: 20,
        flex: 1,

    },

    body: {
        wordWrap: 'break-word',
    },

    gitTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    }
}));

export default function About() {
    const classes = useStyles();
    const content =
        //container spacing left indent, needs to stay for cards to appear, item xs right indentation to move cards to next line 
            <Grid container spacing={1} className = {classes.container}>
            <Grid item xs = {12}>
                <Typography component="h1">
                JEFF IS A PROFESSIONAL DRUG-FREE BODYBUILDER AND POWERLIFTER. THROUGH HIS INFORMATIVE AND ENTERTAINING YOUTUBE CHANNEL WHICH HAS GATHERED A FAN-BASE OF OVER 1 MILLION SUBSCRIBERS, JEFF AIMS TO SHARE THE KNOWLEDGE HE HAS GATHERED THROUGH UNIVERSITY EDUCATION AND FIELD EXPERIENCE WITH OTHERS WHO ARE PASSIONATE ABOUT THE SCIENCE BEHIND BUILDING MUSCLE, LOSING FAT AND GETTING HEALTHIER.
                </Typography>
            </Grid>
            <Card className={classes.aboutCard}>
                <Typography className={classes.aboutTitle}>
                    About Us
                </Typography>
                <Typography className={classes.body} component="p">
                    Michael Zhu, Jim Mo
                </Typography>
            </Card>

            <Card className={classes.git}>
                <Typography className={classes.gitTitle}>
                    Git
                </Typography>
            </Card>
        </Grid>
    return content;
}