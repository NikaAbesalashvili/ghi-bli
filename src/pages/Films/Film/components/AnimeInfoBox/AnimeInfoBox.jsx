import { styled, alpha } from '@mui/material/styles';

const AnimeInfoBox = styled('div') (({ theme }) => ({
    paddingTop: '1.5rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'max(10vh, .5rem)',
    color: theme.palette.common.white,
    backgroundColor: alpha(theme.palette.common.black, 0.65),
}));

export default AnimeInfoBox;
