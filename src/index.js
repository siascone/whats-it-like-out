import { fetchUsersWeather, fetchAllStations, getUserLocation } from "./scripts/weatherUtils"

document.addEventListener('DOMContentLoaded', () => {
    // console.log('Hello World!');
    // const userLocation = getUserLocation()
    // localStorage.setItem('userLocation', userLocation)
    getUserLocation();
    window.fetchUsersWeather = fetchUsersWeather;
    window.fetchAllStations = fetchAllStations;
    window.getUserLocation = getUserLocation;
});