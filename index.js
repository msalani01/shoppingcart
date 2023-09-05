var carritoVisible = false;

if(document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready)
}else{
    ready();
}

function ready(){
    var botonesEliminarItem = document.getElementsByClassName("btn-eliminar");
    for(var i=0; i < botonesEliminarItem.length;i++){
        var button = botonesEliminarItem[i];
        button.addEventListener("click", eliminarItemCarrito);
    }

    var botonesSumarCantidad = document.getElementsByClassName("sumar-cantidad");
    for(var i=0; i< botonesSumarCantidad.length;i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener("click", sumarCantidad);
    }

    var botonesRestarCantidad = document.getElementsByClassName("restar-cantidad");
    for(var i=0; i< botonesRestarCantidad.length;i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener("click", restarCantidad);
    }
    
    var botonesAgregarAlCarrito = document.getElementsByClassName("boton-item");
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener("click", botonesAgregarAlCarritoClicked);
        }
}

function eliminarItemCarrito(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

    actualizarTotalCarrito();
    OcultarCarrito();
}

function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName("carrito")[0];
    var carritoItems = carritoContenedor.getElementsByClassName("carrito-item");
    var total = 0
}

for(var i=0; i< carritoItems.length;i++){
    var item = carritoItems[i];
    var precioElemento = item.getElementsByClassName("carrito-item-precio") [0];
    console.log(precioElemento);
    var precio = parseFloat(precioElemento.innerText.replace("$","").replace(".",""));
    console.log(precio);
    var cantidadItem = item.getElementsByClassName("carrito-item-cantidad") [0]
    var cantidad = cantidadItem.value;
    console.log(cantidad);
    total = total + (precio * cantidad);
}
total = Math.round(total*100)/100;
document.getElementsByClassName("carrito-precio-total") [0].innerText = $ + total.toLocaleString("es") + ",00";

function OcultarCarrito(){
    var carritoItems = document.getElementsByClassName("carrito-items")[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName("carrito") [0];
        carrito.style.marginRight = "-100%";
        carrito.style.opacity="0";
        carritoVisible = false;

        var items = document.getElementsByClassName("contenedor-items") [0];
        items.style.width = "100%"
    }
}

function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName("carrito-item-cantidad") [0].value;
    console.log(cantidadActual);
    cantidadActual++;
    selector.getElementsByClassName("carrito-item-cantidad") [0].value = cantidadActual;
}

function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var cantidadActual = selector.getElementsByClassName("carrito-item-cantidad") [0].value;
    console.log(cantidadActual);
    cantidadActual--;
    selector.getElementsByClassName("carrito-item-cantidad") [0].value = cantidadActual;

    if (cantidadActual>=1){
        selector.getElementsByClassName("carrito-item-cantidad") [0].value = cantidadActual;
        actualizarTotalCarrito();
    }   
}  

function botonesAgregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo =item.getElementsByClassName("titulo-item")[0].innerText;
    console.log(titulo);
    var precio = item.getElementsByClassName("precio-item") [0].innerText;
    var imagenSrc = item.getElementsByClassName("img-item") [0].src;
    console.log(imagenSrc)

    agregarItemAlCarrito(titulo, precio, imagenSrc)
}

function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement("div");
    classList.add("item")
    var itemsCarrito = document.getElementsByClassName("carrito-items") [0];

    var nombresItemsCarrito = itemsCarrito.getElementsByClassName("carrito-item-titulo");
    for(var i=0; i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("el item ya se encuentra en el carrito");
            return
        }
    }


    var itemCarritoContenido = 



}
