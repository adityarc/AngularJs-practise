import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   title : string = "Product Details" ;
  product = [{
      name : "mobile",
      price : "100.12",
      quantity : "25",
      rating : 4.56,
      releasedate : new Date(2018,2,22)   
  }]

}
