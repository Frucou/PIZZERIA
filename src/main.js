//Importar datos de pizzas


//Importación del Componente MainFooter




//Todo elemento Vue tiene que tener un OBJETO componente. Siempre habrá un elemento (componente) raíz
const ComponenteRaiz = {
    //Cargamos el MODELO, esto es, los datos con los que trabajeremos en nuestra app
    //En Vue esto se almacena en la FUNCIÓN data() 
    data(){
        return { //La función data debe retornar un Objeto sí o sí
           //Datos (propiedades) del modelo
           sitio : 'WebFerrol', //Logo o título del sitio
           enlaceSitio: 'https://www.webferrol.com', //Enlace a la página oficial del autor
           total: 0, //Cantidad total en euros de las pizzas seleccionadas
           precioUnitario: 0, //Precio unitario de la pizza
           btnAnadirActivado: false, //Si el botón de añadir está activo
           codigo: null, //código de la pizza seleccionada
           datosPizzas: [], //Datos importados
           listaCompra: [], //Al presionar el botón añadir se añade un elemento
        }
    },
    //Las propiedades computadas están pensadas para quitar expresiones muy largas aplicadas a nuestro modelo de datos. Es decir se aplican a los datos
    computed: { //Las propiedades aplicadas se construyen a partir de un objeto
        // miFuncion(){ //Cada propiedad computada es una función y SIEMPRE RETORNA UN VALOR
        //     return 'algo'; //VALOR DE RETORNO
        // }
    }
}
const app = Vue.createApp(
    ComponenteRaiz
);

//Para añadir nuevos componentes hay que realizarlo antes de montar nuestro componente principal de Vue
//app.component('main-footer', MainFooter);


const vm = app.mount("#app");