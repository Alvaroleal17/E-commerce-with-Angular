import { Component, OnInit } from '@angular/core';
import { EcommerceServService  } from 'src/app/services/ecommerce-serv.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar-comp.component.html',
  styleUrls: ['./navbar-comp.component.css']
})
export class NavbarCompComponent implements OnInit {

  constructor(public productServ: EcommerceServService) { }

  ngOnInit(): void {
  }

}
