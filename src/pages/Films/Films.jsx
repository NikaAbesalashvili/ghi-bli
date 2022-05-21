import { Grid } from '@mui/material';

import AnimeCard from "../../components/AnimeCard/AnimeCard";
import { useFilms } from './hooks/useFilms';

const Films = () => {
    
    const { films } = useFilms();
    
    return (
        <>
            {!films.length ? (
                'LOADING MOVIES'
            ) : (
                <Grid
                    container
                    alignItems='stretch'
                    spacing={4}
                    paddingX={2}
                    marginTop={1}
                >

                    {films.map((film) => (
                        <AnimeCard
                            key={film.id}
                            imageUrl={film.image}
                            animeTitle={film.title}
                            animeOriginalTitle={film.original_title}
                            animeDescription={film.description}
                        />
                    ))}

                </Grid>
            )}
        </>
    );
};

export default Films;
