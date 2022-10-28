import { Component, OnInit } from '@angular/core';
import { EcommerceServService } from 'src/app/services/ecommerce-serv.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    public productServ: EcommerceServService,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.detalleProducto();
  }

  id_url = this.ruta.snapshot.params['id'];
  prod = {};

  detalleProducto() {
    this.productServ.detalleProducto(this.id_url).subscribe({
      next: (res) => {
        this.productServ.datosProd = res;
      },
      error: (err) => console.log(err),
    });
  }

  agregarProducto(form: NgForm) {
    this.productServ.insertarCompra(form.value).subscribe({
      next: (res) => {
        this.detalleProducto();
        form.reset();
      },
      error: (err) => console.log(err),
    });
  }
}
