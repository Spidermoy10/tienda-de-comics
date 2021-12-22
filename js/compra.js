const compra= new carrito1();
const listaCompra= document.querySelector('#lista-compra tbody');
const procesarCompraBtn=document.getElementById('procesar-compra');
const cliente= document.getElementById('cliente');
const correo= document.getElementById('correo');

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded', compra.CompraLocalStorage());
    
    compra.calcularTotal();

    procesarCompraBtn.addEventListener('click', procesaCompra);
}


function procesaCompra(e){
    e.preventDefault();

    if(compra.obtenerProductosLocalStorage().length === 0){
		 window.alert("No hay ningún producto en el carrito");
		 
    } 
    else if(destinatario.value === '' || cc_to.value===''){
        window.alert("Llena todos los campos.");
    }
    else{
        const cargandoGif= document.querySelector('#cargando');
        cargandoGif.style.display = 'block';

        const enviado= document.createElement('img');
        enviado.src= "ventaM/listo.gif";
        enviado.style.display= 'block';
        enviado.width= '150';

        setTimeout(()=>{
            cargandoGif.style.display='none';
            document.querySelector('#loaders').appendChild(enviado);
            setTimeout(()=> {
                enviado.remove();
                window.location= "file:///C:/Users/DELL/Desktop/Escuela/7%C2%BA%20semestre/Programacion%20WEB/Phyton/Nueva%20carpeta/borrame/Repositorios/Python/Proyecto/asgard%20comics.html";
                compra.eliminarProductoLocalStorage();
            }, 2000);
        },3000); 


        const btn = document.getElementById('button');

document.getElementById('procesar-pago')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_p3d4j6y';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


    }
    
}


		