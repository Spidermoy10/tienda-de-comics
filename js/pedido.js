const carro = new carrito1(); 
const carrito =document.getElementById('carrito');
const producto=document.querySelectorAll('.product');
const listaProductos= document.querySelector('#lista-carrito tbody');
const procesarPedidoBtn= document.getElementById('procesarPedido');

cargarEventos();

function cargarEventos(){
   
        [].forEach.call(producto, function(p) {        
        p.addEventListener('click', (e)=>{carro.comprarProducto(e); console.log(e.target); });   
                 });
   
       carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

       document.addEventListener('DOMContentLoaded',carro.leerLocalStorage());

       procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}


