const findParks = (apiKey, state, max) => {
    fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&limit=${max}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(responseJson => showParks(responseJson))
    .catch(error => alert(error));
}

const showParks = (responseJson) => {
    $('.national_park_list').html("");
    let results = "";
    responseJson.data.forEach(el => {
    let add = el.addresses[0];
    results += `<h2 class="name">${el.fullName}</h2>
        <img src="${el.images[0].url}" alt="pick-of-national-park">
        <p class="description">${el.description}</p>
        <p class="addresses">Address:
        ${add.line1}, ${add.city} ${add.stateCode} ${add.postalCode}</p>
        <p class="url"><a href="${el.url}">Click here to learn more!</a></p>`
    })
    $('.national_park_list').append(results);
}


const handleClick = () => {  
    $('main').on('submit', event => {
    event.preventDefault();
    let max = $('#max').val();
    let state = $('#state').val();
    console.log(max, state)
    findParks(apiKey(), state, max)
    })
}

const apiKey = () => {
return XlAzkLBpVFOrcEOXoiQz4HhtdwOPR9de6fynWvqE,
}

const main = () => {
    findParks();
    showParks();
    handleClick();
    
}

$(main)