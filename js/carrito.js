
class carrito1{
    //añadimos productos al carrito

    comprarProducto(e){
        e.preventDefault();

        if(e.target.classList.contains('agregar-carrito')){
            console.log(e.target.parentElement);

            this.leerDatosProducto(e.target.parentElement);
        }
       
    }

    leerDatosProducto(producto){
        const infoProducto= {
            imagen: producto.querySelector('img').src,
            titulo: producto.querySelector('h3').textContent,
            precio: producto.querySelector('span').textContent,
            id: producto.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }

        this.insertarCarrito(infoProducto);
    }

    insertarCarrito(producto){
        const row= document.createElement('tr');

        row.innerHTML =`
            <td>
                <img src="${producto.imagen}" width= 100>
            </td>
            <td>${producto.titulo}</td>
            <td>$ ${producto.precio}</td>
            <td>
                <a class="borrar" data-id="${producto.id}">x</a>
            </td>
            `;
            listaProductos.appendChild(row);

            this.guardarProductosLocalStorage(producto);
    }

    eliminarProducto(e){
        e.preventDefault();

        let producto, productoID;

        if(e.target.classList.contains('borrar')){
            e.target.parentElement.parentElement.remove();
            producto= e.target.parentElement.parentElement;
            productoID= producto.querySelector('a').getAttribute('data-id');
        
        }
       this.eliminarProductoLocalStorage(productoID);
       
    }


    //guardamos los productos en localStorage

    guardarProductosLocalStorage(producto){
        let productos;
        productos=this.obtenerProductosLocalStorage();
        productos.push(producto);

        localStorage.setItem('productos',JSON.stringify(productos));
    }


    obtenerProductosLocalStorage(){
        let productoLS;

        if(localStorage.getItem('productos')=== null){
            productoLS=[];
        }else{
            productoLS=JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS= this.obtenerProductosLocalStorage();

        
        productosLS.forEach(function (productoLS) {
           
            if(productoLS.id === productoID){
                productosLS.splice(0,1); 
            }
        });
        localStorage.setItem('productos',JSON.stringify(productosLS));
    }


    leerLocalStorage(){
        let productosLS;
        productosLS=this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto) {

            const row= document.createElement('tr');

            row.innerHTML =`
            
                <td>
                    <img src="${producto.imagen}" width= 100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>
                <a class="borrar" data-id="${producto.id}">x</a>
            </td>
                `;
                listaProductos.appendChild(row);
            
        });
    }
   
    procesarPedido(e){
        location.href="file:///C:/Users/DELL/Desktop/Escuela/7%C2%BA%20semestre/Programacion%20WEB/Phyton/Nueva%20carpeta/borrame/Repositorios/Python/Proyecto/pagar.html";
    }
    
    
    CompraLocalStorage(){
        
        let productosLS;
        productosLS=this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto) {
            
            const row= document.createElement('tr');

            row.innerHTML =`
            
                <td>
                    <img src="${producto.imagen}" width= 100>
                </td>
                <td>${producto.titulo}</td>
                <td>$ ${producto.precio}</td>
              <!--  <td>$ ${producto.precio * producto.cantidad}</td> -->
                <td>
                <a class="borrar" data-id="${producto.id}">x</a>
            </td>
                    `;
                listaCompra.appendChild(row);
            
        });
    }

    calcularTotal(){
        let productoLS;

        let total=0, subtotal=0, igv=0;

        productoLS= this.obtenerProductosLocalStorage();

        for(let i=0; i<productoLS.length; i++){
            let element= Number(productoLS[i].precio);
            total= total+element;
        }

        igv= parseFloat(total * 0.16).toFixed(2);
        subtotal = parseFloat(total-igv).toFixed(2);

        document.getElementById('subtotal').innerHTML = "$ " + subtotal;
        document.getElementById('igv').innerHTML = "$ " + igv;
        document.getElementById('total').innerHTML= "$ " + total;
    }

}
    