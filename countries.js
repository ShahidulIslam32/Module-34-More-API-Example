let loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(request => request.json())
    .then(data => callCountryFunc(data))
}

let callCountryFunc = (data) => {
    const a = document.getElementById('countries')
    
    for(let country of data){
        const b = document.createElement('h3') 
        b.classList.add('tabling')
        b.innerHTML = `
        <h4>Country Name : ${country.name}</h4> 
        <h4>Capital : ${country.capital} </h4> 
        <h4>Region : ${country.region}</h4> 
        <h4>Population : ${country.population}</h4>
        <button onclick="loadDynamic('${country.name}')" class="btn btn-info">View Details</button>`
        a.appendChild(b)
    }
}

let loadDynamic = name  => {
    let url = `https://restcountries.com/v2/name/${name}`
     fetch(url)
    .then(request => request.json())
    .then(data    => showCountry(data[0]))
    
}

const showCountry = (data) =>{
    console.log(data);
    const a = document.getElementById('show')
    a.innerHTML = 
    `<table class="table container ">
        <tr>
        <th>Country Name</th>
        <th>Capital</th>
        <th>Population in Bilion</th>
        <th>Country Flag</th>
        </tr>
        <tr>
        <td>${data.name}</td>
        <td>${data.capital}</td>
        <td>${data.population}</td>
        <td><img width="300px" src="${data.flag}"/></td>
        </tr>
    </table>`
}

