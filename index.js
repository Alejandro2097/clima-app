const { inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
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
                const lugar = await leerInput('Ciudad: ');
                await busquedas.ciudad(lugar);
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