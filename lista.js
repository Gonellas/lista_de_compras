//! Armar un carrito de compras que permita al usuario:
// 1. Agregar productos
// 2. Mostrar el carrito completo
// 3. Buscar un producto en el carrito
// 4. Filtrar productos que coincidan con una palabra, parte de ella o una letra
// 5. Eliminar un producto

//? 1. Agregar productos
// Armo un array vacío para guardar los productos
let lista = [];

//Función para agregar productos al array vacío y que sirva como escuchador de eventos en el botón
function agregarProducto(){
    let producto = prompt("Ingrese un producto");
    lista.push(producto.toLowerCase());
    console.log(lista);
}

//? 2. Mostrar carrito completo
//Función mostrar carrito disparada por el onclick en botón
function mostrarLista(){
    if(lista.length === 0){
        alert("Todavía no has agregado productos a tu carrito");
    } else{
        alert(`Los productos de tu carrito son: \n- ${lista.join('\n- ')}`);
    }
}

//? 3. Buscar Producto
//Función para buscar el producto ingresado en la lista
function buscarProducto(){
    let producto = prompt("Qué producto deseas saber si está en el carrito?");
    if(lista.includes(producto.toLowerCase())){
        alert("El producto está en la lista");
    } else {
        alert("El producto no se encuentra en la lista");
    }
}

//? 4. Filtrar productos
//Función para filtrar produto, utilizamos un filter en la lista que pregunte si el producto ingresado está incluido
function filtrarProducto(){
    let filtro = prompt("Por qué palabra querés filtar tu carrito?");
    let productosFiltrados = lista.filter(producto => producto.includes(filtro.toLowerCase()));
    if(productosFiltrados.length === 0){
        alert("Ningún producto contiene la palabra especificada");
    } else {
        alert(`Los productos filtrados son: \n- ${productosFiltrados.join("\n- ")}`);
    }
}

//? 5. Eliminar producto
//Función para eliminar el elemento, buscamos la posición del producto elegido con indexOf
//y luego lo eliminamos con splice
function eliminarProducto(){
let productoAEliminar = prompt(`Los productos en tu lista son: \n- ${lista.join('\n- ')} \n Cuál deseas eliminar?`);
let posicion = lista.indexOf(productoAEliminar.toLowerCase());
if(posicion === -1){
    alert("El producto que desea borrar no existe");
} else {
    lista.splice(posicion, 1);
    alert(`El producto ${productoAEliminar.toLowerCase()} se eliminó correctamente`);
}
}
