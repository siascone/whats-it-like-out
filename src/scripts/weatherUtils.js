export const getUserLocation = function() {

    let status = '';
    let location;

    function success(position) {
        location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        status = ''
        // console.log(location)
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

    const response = await fetch(`https://api.open-meteo.com/v1/gfs?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true&&temperature_unit=fahrenheit`)

    const data = await response.json();

    return data;
}
