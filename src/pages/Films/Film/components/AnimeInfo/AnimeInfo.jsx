import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const InfoBox = styled('div') (() => ({
    paddingBottom: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
}));

const AnimeInfo = ({
    animeOriginalTitle,
    originalTitleRomanised,
    duration,
    aired,
    director,
    producer,
    rtScore,
}) => {
    return (
        <InfoBox>
            
            <Typography
                component='h6'
                variant='h5'
                align='center'
                gutterBottom
            >
                {animeOriginalTitle} - {originalTitleRomanised}
            </Typography>

            <Typography
                component='h6'
                variant='h5'
                align='center'
                gutterBottom
            >
                Duration: {duration}M
            </Typography>

            <Typography
                component='h6'
                variant='h5'
                align='center'
            >
                Aired: {aired}
            </Typography>

            <Typography
                component='h6'
                variant='h5'
                align='center'
                gutterBottom
            >
                Director: {director}
            </Typography>

            <Typography
                component='h6'
                variant='h5'
                align='center'
                gutterBottom
            >
                Producer: {producer}
            </Typography>

            <Typography
                component='h6'
                variant='h5'
                align='center'
                gutterBottom
            >
                Rt Score: {rtScore}
            </Typography>
            
        </InfoBox>
    );
};

export default AnimeInfo;
