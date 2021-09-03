const axios = require('axios');

class Busquedas{
    historial = ['Tegucigalpa', 'Madrid', 'San jose'];

    constructor(){
        //TODO: leer DB si existe 
    }
    async ciudad( lugar = ''){

        try{
            //peticion http
            const instance = axios.create({
                baseURL:  `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params:{
                    'access_token' : 'pk.eyJ1Ijoia3JhdXNlcjczIiwiYSI6ImNrdDNta2ZsZDB5dTMydG54c2t2ZGgycHQifQ.sfg8B1rxqzdECb2U6FB-eQ',
                    'limit': 5,
                    'language': 'es'
                }
            });
        
            const resp = await instance.get();
           
            console.log(resp.data);

            return []; 
        }catch(error){
            return[];
        }   
        

        return [];// retornar los lugares

    }
}

module.exports = Busquedas;