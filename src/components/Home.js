import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'https://i.pinimg.com/474x/dc/21/5a/dc215a9d151df4101d869fe44d30ff87--building-plans-chest-routine.jpg',
    title: 'Chest',
    width: '30%',
  },
  {
    url: 'https://www.bodybuilding.com/fun/images/2014/all-about-shoulder-pain_05-700xh.jpg',
    title: 'Shoulders',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Arms',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Legs',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Abs',
    width: '30%',
  },
  {
    url: '/static/images/grid-list/camera.jpg',
    title: 'Back',
    width: '30%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    paddingTop: 20,
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      //adjusts the opacity when hovered over
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      // '& $imageMarked': {
      //   opacity: 0,
      // },
      
      //Box that occurs around button when hovered over
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  //focusVisible: {},

  //positioning of the button 
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  //positioning of image
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  //boxes that contain image and button 
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
  },
  //positioning of button title
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Home() {
  const classes = useStyles();
  const content =
    <div>
      <div className={classes.root}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>

        ))}
      </div>

    </div>
  return content;


}