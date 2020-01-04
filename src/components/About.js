import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({

    aboutCard: {
        marginLeft: 0,
        marginRight: 10,
        flex: 1,
    },

    aboutTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    git: {
        marginRight: 3,
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
        <div style={{ display: 'flex', paddingTop: 20 }} >
            <Card className={classes.aboutCard}>
                <Typography className={classes.aboutTitle}>
                    About Us
                </Typography>
                <Typography className={classes.body} component="p">
                    djkaljdklsajjkdlsjaklfdjsklafdjsklajdklsjakldjsklajlkjddklsjakldjsalkjdkljslkjljklsajkdljsakdljaksljdlkasjkljsl!!!!
                </Typography>
            </Card>
            <Card className={classes.git}>
                <Typography className={classes.gitTitle}>
                    Git
                    </Typography>
            </Card>
        </div>
    return content;
}