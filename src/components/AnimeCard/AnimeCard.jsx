import { Grid, Paper, Typography, Button, ThemeProvider } from "@mui/material";
import { theme } from './theme';

import { Link } from 'react-router-dom';

const AnimeCard = ({ animeId, animeBannerUrl, animeTitle, animeOriginalTitle, animeDescription }) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            lg={3}
        >
            <ThemeProvider theme={theme} >

                <Paper
                    elevation={3}
                >
                    <img
                        src={animeBannerUrl}
                        alt={animeTitle}
                        style={{
                            width: '100%',
                            aspectRatio: '16 / 9',
                            borderTopLeftRadius: '.25rem',
                            borderTopRightRadius: '.25rem'
                        }}
                    />
                    
                    <Typography
                        component='h2'
                        variant='h6'
                        align='left'
                        marginLeft={1}
                        marginY={1}
                        gutterBottom
                    >
                        {animeTitle}
                    </Typography>

                    <Typography
                        component='h2'
                        variant='subtitle1'
                        align='left'
                        marginLeft={1}
                        gutterBottom
                    >
                        {animeOriginalTitle}
                    </Typography>

                    <Typography
                        align='left'
                        component='p'
                        variant='body3'
                        noWrap
                        padding={1}
                        gutterBottom
                    >
                        {animeDescription}
                    </Typography>

                    <Button
                        component={Link}
                        variant='contained'
                        color='primary'
                        size='medium'
                        to={`/films/${animeId}`}
                    >
                        Learn More
                    </Button>

                </Paper>

            </ThemeProvider>
        </Grid>
    );
};

export default AnimeCard;
