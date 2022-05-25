import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilm } from '../../../../api';

export const useFilm = () => {
    
    const { filmId } = useParams();
    const [animeData, setAnimeData] = useState({  });

    useEffect(() => {
        
        loadFilm();
    
    }, []);

    const loadFilm = async () => {
        const apiData = await getFilm(filmId);

        const { data } = apiData;

        setAnimeData(data);
    };

    return {
        animeData,
    };
};
