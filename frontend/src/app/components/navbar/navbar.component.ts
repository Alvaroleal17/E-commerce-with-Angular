import { Component, OnInit } from '@angular/core';
import { EcommerceServService  } from 'src/app/services/ecommerce-serv.service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public productServ: EcommerceServService) { }

  ngOnInit(): void {
  }

}
