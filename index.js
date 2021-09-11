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
                const lugares = await busquedas.ciudad(termino);
                const id = await listarLugares(lugares);
                console.log({id});
                //Buscar los lugares

                //clima
                
                //mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ', );
                console.log('Lat: ', );
                console.log('Log: ', );
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