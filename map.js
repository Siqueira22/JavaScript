

function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Gabriel','Admin');
usuarios.set('Luiz', 'Usuer');
usuarios.set('Jorge', 'Usuer');
usuarios.set('Artur', 'Admin');

console.log(getAdmins(usuarios));