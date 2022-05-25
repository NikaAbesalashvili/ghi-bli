import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'h4',
                    },
                    style: {
                        color: '#fff',
                    },
                },
            ],
        },
    },
});
