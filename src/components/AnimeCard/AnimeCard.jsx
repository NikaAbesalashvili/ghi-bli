import { Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const AnimeCard = ({ imageUrl, animeTitle, animeOriginalTitle, animeDescription }) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            component={motion.div}
            whileHover={{
                scale: 1.1,
                transition: {
                    duration: .3,
                },
            }}
        >
            <Paper
                elevation={3}
            >
                <img
                    src={imageUrl}
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
                    variant='subtitle1'
                    align='left'
                    marginLeft={1}
                    gutterBottom
                >
                    Title: {animeTitle}
                </Typography>

                <Typography
                    component='h2'
                    variant='subtitle2'
                    align='left'
                    marginLeft={1}
                    gutterBottom
                >
                    Original Title: {animeOriginalTitle}
                </Typography>

                <Typography
                    align='left'
                    component='p'
                    variant='body2'
                    noWrap
                    marginLeft={1}
                    paddingY={1}
                    gutterBottom
                >
                    {animeDescription}
                </Typography>

            </Paper>
        </Grid>
    );
};

export default AnimeCard;
