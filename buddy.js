const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data => loadBuddyFunc(data))
}

let loadBuddyFunc = (data) =>{
    let buddies = data.results;
    let one = document.getElementById('buddy')
    for(const buddy of buddies){
        let p = document.createElement('p')
        p.innerText = `Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}   Address :  ${buddy.location.street.number}, ${buddy.location.street.name}`
        one.appendChild(p)
    }
}