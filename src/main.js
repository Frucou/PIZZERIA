//Importar datos de pizzas




//Todo elemento Vue tiene que tener un OBJETO componente. Siempre habrá un elemento (componente) raíz
const ComponenteRaiz = {
    //Cargamos el MODELO, esto es, los datos con los que trabajeremos en nuestra app
    //En Vue esto se almacena en la FUNCIÓN data() 
    data(){
        return { //La función data debe retornar un Objeto sí o sí
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
}
const app = Vue.createApp(
    ComponenteRaiz
);
const vm = app.mount("#app");