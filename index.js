require('dotenv').config();

const { inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoCheck} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");



const main = async() =>{

    const busquedas =  new Busquedas();
    let opt;
    do{
        opt = await inquirerMenu();
        switch(opt){
            case 1:
                //mostrar mensaje 
                const termino = await leerInput('Ciudad: ');
                
                //Buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                //Seleccionar lugar
                const id = await listarLugares(lugares);
                if(id === '0') continue;
                const lugarSel = lugares.find(l => l.id === id);
                //Guardar en DB
                busquedas.agregarHistorial(lugarSel.nombre)
                //clima
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
                console.log(clima);
                //mostrar resultados
                console.clear();
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre.green );
                console.log('Lat: ', lugarSel.lat );
                console.log('Log: ', lugarSel.lng );
                console.log('Temperatura: ',clima.temp );
                console.log('Minima: ', clima.min);
                console.log('Máxima: ', clima.max );
                console.log("Como está el clima: ", clima.desc.green);

            break;

            case 2:
                busquedas.historialCapitalizado.forEach((lugar, i) => {
                    const idx = `${ i + 1}.`.green;
                    console.log(`${ idx } ${lugar}`);
                })
            break;
        }
        await pausa();
    }while(opt !== 0)
}
main();