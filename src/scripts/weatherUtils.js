
export async function fetchAllStations() {
    const options = {
        method: 'GET',
        headers: {
            token: 'aXvfXEMotqgusxHBmEhwJkYDCoQIjrFo'
        }
    }

    const response = await fetch('https://www.ncei.noaa.gov/cdo-web/api/v2/stations', options)

    const data = await response.json();

    return data
};

export const getUserLocation = function() {

    let status = '';
    let location;

    function success(position) {
        location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        status = ''
        console.log(location)
        localStorage.setItem('userLocation', JSON.stringify(location))
        return location
    }

    function error() {
        status = 'Unable to retrieve your location'
        console.log(status)
    }

    if (!navigator.geolocation) {
        status = 'Geolocation is not supported by your browser'
    } else {
        status = 'Finding location...'
    }

    navigator.geolocation.getCurrentPosition(success, error)
}

export async function fetchUsersWeather() {
    const location = JSON.parse(localStorage.getItem('userLocation'))

    const response = await fetch(`api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m`)

    const data = await response.json();

    console.log(data)
    return data;
}
