let p = fetch('https://jsonplaceholder.typicode.com/users') // method = GET 
    .then(response => response.json(), error => console.log(error)) 
    .then(users => renderUsers(users), error => console.log(error)); 
 
function renderUsers(users) { 
    for (let i = 0; i < users.length; i++) { 
        if (users[i].name == 'Ervin Howell') { 
            console.log(users[i].id + "." + ' ' + users[i].name + "------- " + "Yes") 
        } 
        else { 
            console.log(users[i].id + "." + ' ' + users[i].name + " -------" + "No") 
        } 
    } 
}