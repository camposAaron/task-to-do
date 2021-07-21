const fs = require('fs');
const archivo = './database/data.json';

const GuardarDB = ( data ) =>{
    
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const LeerDB = () => {

    if(!fs.existsSync(archivo))
        return null;
    
    const info = JSON.parse(fs.readFileSync(archivo, {encoding: 'utf-8'}));
    return info;
}

module.exports = {
    GuardarDB,
    LeerDB
}