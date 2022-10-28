import { Component, OnInit } from '@angular/core';
import { EcommerceServService } from 'src/app/services/ecommerce-serv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ecommerce-comp',
  templateUrl: './ecommerce-comp.component.html',
  styleUrls: ['./ecommerce-comp.component.css'],
})
export class EcommerceCompComponent implements OnInit {
  constructor(
    public productServ: EcommerceServService,
    private ruta: ActivatedRoute
  ) {}

  categor = this.ruta.snapshot.params['cat'];
  ngOnInit(): void {
    console.log(this.categor);
    if (this.categor != undefined || this.categor != null) {
      this.obtenerCategoria();
    } else {
      this.listadoProductos();
    }
  }

  listadoProductos() {
    this.productServ.obtenerProductos().subscribe({
      next: (res) => {
        this.productServ.documentos = res;
      },
      error: (err) => console.log(err),
    });
  }

  obtenerCategoria() {
    this.productServ.obtenerCategoria(this.categor).subscribe({
      next: (res) => {
        this.productServ.documentos = res;
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
}
