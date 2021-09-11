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
                const lugarSel = lugares.find(l => l.id === id);
                //clima
                
                //mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre );
                console.log('Lat: ', lugarSel.lat );
                console.log('Log: ', lugarSel.lng );
                console.log('Temperatura: ', );
                console.log('Minima: ', );

            break;

            case 2:
                console.log('Selecciono historial');
            break;
        }
        await pausa();
    }while(opt !== 0)
}
main();