import axios from 'axios';

const API = axios.create({ baseURL: 'https://ghibliapi.herokuapp.com' });

// FILMS
export const getFilms = () => API.get('/films');
export const getFilm = (filmId) => API.get(`/films/${filmId}`);

// PEOPLE
export const getPeople = () => API.get('/people');
export const getPerson = (personId) => API.get(`/people/${personId}`);

// LOCATIONS
export const getLocations = () => API.get('/locations');
export const getLocation = (locationId) => API.get(`/locations/${locationId}`);

// SPECIES
export const getSpecies = () => API.get('/species');
export const getSpecie = (specieId) => API.get(`/species/${specieId}`);

// VEHICLES
export const getVehicles = () => API.get('/vehicles');
export const getVehucle = (vehicleId) => API.get(`/vehucles/${vehicleId}`);
