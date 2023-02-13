const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://environment.data.gov.uk/flood-monitoring/id/measures?stationType=TideGauge&_limit=25", requestOptions)
    .then(response => response.json())
    // .then(result => console.log(result.items[3].label))
    .then(result => {
        const station = result.items[3].label
        const value = result.items[3].latestReading.value
        const date = result.items[3].latestReading.date

        const markup = `<li><h2>${station}</h2></li>
                        <li><strong>${value}</strong></li>
                        <li>${date}</li>`
        
        document.querySelector('ul').insertAdjacentHTML('beforeend', markup)

        console.log(station)
        console.log(value)
        console.log(date)
    })
    .catch(error => console.log('error', error));