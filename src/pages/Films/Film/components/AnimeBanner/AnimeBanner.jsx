import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

import { theme } from './theme';

const BannerBox = styled('div') (() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}))

const AnimeBanner = ({ animeImage, animeTitle }) => {
    return (
        <BannerBox>
            <img
                src={animeImage}
                alt={animeTitle}
                style={{
                    width: 'max(350px, 65%)',
                    borderRadius: '20px'
                }}
            />
            <ThemeProvider theme={theme} >

                <Typography
                    variant='h4'
                    component='h2'
                    align='center'
                    marginTop={3}
                >
                    {animeTitle}
                </Typography>

            </ThemeProvider>
        </BannerBox>
    );
};

export default AnimeBanner;
