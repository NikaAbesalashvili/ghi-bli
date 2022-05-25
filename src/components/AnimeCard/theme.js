import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: {
                        color: 'primary',
                    },
                    style: {
                        backgroundColor: '#00ace6',
                        fontSize: '.9rem',
                        fontWeight: '700',
                        borderRadius: '1.3rem',
                    },
                },
                {
                    props: {
                        variant: 'contained',
                    },
                    style: {
                        margin: '1rem 0',
                    },
                },
            ],
        },
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body3',
                    },
                    style: {
                        fontSize: '1em',
                    }
                },
            ]
        }
    },
});
