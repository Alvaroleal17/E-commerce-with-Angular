import { Component, OnInit } from '@angular/core';
import { EcommerceServService } from 'src/app/services/ecommerce-serv.service';
import { Compra_modelo } from 'src/app/models/compras';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  constructor(public productServ: EcommerceServService) {}

  ngOnInit(): void {
    this.listadoProductos();
  }

  total_compra = 0;

  listadoProductos() {
    this.productServ.obtenerCompras().subscribe({
      next: (res) => {
        this.productServ.documents = res;
        for (let i = 0; i < res.length; i++) {
          //Recorrer en un for el res. Y calcular cual es "total"  TOTAL.
          this.total_compra = this.total_compra + res[i].total;
        }
      },
      error: (err) => console.log(err),
    });
  }

  eliminarProducto(id: any) {
    let confirmacion = confirm('Desea eliminar el Video');
    console.log(confirmacion);
    if (confirmacion == true) {
      this.productServ.eliminarProducto(id).subscribe({
        next: (res) => {
          this.listadoProductos();
        },
        error: (err) => console.log(err),
      });
    }
  }
}
