import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto_modelo } from '../models/productos';
import { Compra_modelo } from '../models/compras';

@Injectable({
  providedIn: 'root'
})
export class EcommerceServService {

  constructor(private http: HttpClient) { }

  URL_API = 'http://localhost:4000';

  documents: Compra_modelo[] = [];

  datosCompr: Compra_modelo = {
    id_producto: "", //corresponde con el ID del producto (colección Productos)
    name_product: "",
    unit_price: 0,
    amount: 1,
    total: 0,
    date: "",
  }

  documentos: Producto_modelo[] = [];

  datosProd: Producto_modelo = {
    article: '',
    description: '',
    url_img: '',
    price: 0,
    category: '',
    stock: 1,
  }
 
  //Productos
  obtenerProductos(){
    let peticion  = this.http.get<Producto_modelo[]>(this.URL_API + '/productos')
    return peticion;
  }

  //Detalle del Producto
  detalleProducto(id: String) {
    let peticion = this.http.get<Producto_modelo>(this.URL_API + '/producto/' + id);
    return peticion;
  }
  
  //Compras
  obtenerCompras() {
    let peticion = this.http.get<Compra_modelo[]>(this.URL_API + '/cesta');
    return peticion;
  }

  //Categorias
  obtenerCategoria(cat: string){
    let peticion = this.http.get<Producto_modelo[]>(this.URL_API + '/categoria/' + cat);
    return peticion;
  }

  //Enviar un producto al carrito
  insertarCompra(datos: Producto_modelo) {
    let peticion = this.http.post(this.URL_API + '/insertar_compra', datos);
    return peticion;
    }
  
  //Eliminar Producto
  eliminarProducto(id: string) {
    let peticion = this.http.delete(this.URL_API + '/eliminar/' + id);
    return peticion;
    }
  







 

}
