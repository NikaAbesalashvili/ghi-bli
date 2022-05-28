import { Typography, CircularProgress } from '@mui/material';
import AnimeBanner from './components/AnimeBanner/AnimeBanner';
import AnimeInfo from './components/AnimeInfo/AnimeInfo';
import AnimeInfoBox from './components/AnimeInfoBox/AnimeInfoBox';

import { useFilm } from './hooks/useFilm';

const Film = () => {

    const { animeData } = useFilm();

    return (
        animeData ? (
            <AnimeInfoBox>

                <AnimeBanner 
                    animeImage={animeData.movie_banner}
                    animeTitle={animeData.title}
                />

                <Typography
                    component='p'
                    variant='h5'
                    align='center'
                    marginX={2}
                    marginY={5}
                    sx={{
                        width: 'max(350px, 70%)'
                    }}
                >
                    {animeData.description}
                </Typography>

                <AnimeInfo 
                    animeOriginalTitle={animeData.original_title}
                    originalTitleRomanised={animeData.original_title_romanised}
                    duration={animeData.running_time}
                    aired={animeData.release_date}
                    director={animeData.director}
                    producer={animeData.producer}
                    rtScore={animeData.rt_score}
                />

            </AnimeInfoBox>
        ) : (
            <CircularProgress sx={{ margin: '2rem 0' }} />
        )
    );
};

export default Film;
