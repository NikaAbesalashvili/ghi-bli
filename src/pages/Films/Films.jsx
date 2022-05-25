import { Grid, CircularProgress } from '@mui/material';

import AnimeCard from "../../components/AnimeCard/AnimeCard";
import { useFilms } from './hooks/useFilms';

const Films = () => {
    
    const { films } = useFilms();
    
    return (
        <>
            {!films.length ? (
                <CircularProgress sx={{ margin: '2rem 0' }} />
            ) : (
                <Grid
                    container
                    alignItems='stretch'
                    spacing={4}
                    paddingX={2}
                    marginY={2}
                >

                    {films.map(({ id, movie_banner, title, original_title, description }) => (
                        <AnimeCard
                            key={id}
                            animeId={id}
                            animeBannerUrl={movie_banner}
                            animeTitle={title}
                            animeOriginalTitle={original_title}
                            animeDescription={description}
                        />
                    ))}

                </Grid>
            )}
        </>
    );
};

export default Films;
