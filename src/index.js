import { fetchUsersWeather, fetchAllStations, getUserLocation } from "./scripts/weatherUtils"

document.addEventListener('DOMContentLoaded', () => {
    // console.log('Hello World!');
    // const userLocation = getUserLocation()
    // localStorage.setItem('userLocation', userLocation)
    const root = document.querySelector('#root')
    const weatherButton = document.querySelector('.get-weather-btn')
    getUserLocation();
    window.fetchUsersWeather = fetchUsersWeather;
    window.fetchAllStations = fetchAllStations;
    window.getUserLocation = getUserLocation;

    weatherButton.addEventListener('click', async () => {
        root.innerText = ''
        fetchUsersWeather().then(res => {
            let ul = document.createElement('ul');
            Object.entries(res).forEach( entry => {
                const [key, value] = entry
                

                if (typeof(value) === 'object') {
                    let li = document.createElement('li')
                    let innerUl = document.createElement('ul')
                    Object.entries(value).forEach(entry => {
                        const [key, value] = entry
                        let innerLi = document.createElement('li')
                        innerLi.innerText = `${key}: ${value}`
                        innerUl.append(innerLi)
                    }

                    )
                    // console.log (innerUl)
                    li.innerText = `${key}:`
                    li.append(innerUl)
                    ul.append(li)
                } else {
                    let li = document.createElement('li')
                    li.innerText = `${key}: ${JSON.stringify(value)}`
                    ul.append(li)
                }

            })
            
            root.append(ul);
        })
    })

});