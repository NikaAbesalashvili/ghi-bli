import { useState, useEffect } from 'react';
import { getFilms } from '../../../api';

export const useFilms = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        
        loadFilms();
    
    }, []);

    const loadFilms = async () => {
        const apiData = await getFilms();

        const { data } = apiData;

        setFilms(data);
    };

    return {
        films,
    };
};
