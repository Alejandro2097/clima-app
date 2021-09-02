const { inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheck} = require("./helpers/inquirer")

const main = async() =>{
    let opt;
    do{
        opt = await inquirerMenu();
        switch(opt){
            case 1:
                console.log('Selecciono buscar ciudad');
            break;

            case 2:
                console.log('Selecciono historial');
            break;
        }
        await pausa();
    }while(opt !== 0)
}
main();