const axios = require('axios')

const url = ""

async function  obtenerDinos(){
        const respuesta = await axios.get(urll);
        console.log(respuesta.data)


}

obtenerDinos()