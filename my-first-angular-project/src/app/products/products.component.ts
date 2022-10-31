import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {id: 1, name:"Minimalist Analog Watch", price:"109", color:"Black", availability:"Available", imageSource:"/assets/product-1.webp" },
    {id: 2, name:"Hisense Ultra Hd Smart TV", price:"3339", color:"Black", availability:"Available", imageSource:"/assets/product-2.jpg" },
    {id: 3, name:"Apple Iphone 12", price:"1855", color:"Black", availability:"Not Available", imageSource:"/assets/product-3.webp" },
    {id: 4, name:"LG Fully Automatic Washing Machine", price:"1765", color:"White", availability:"Available", imageSource:"/assets/product-4.webp" },
    {id: 5, name:"LG Refrigerator with Door Cooling", price:"2815", color:"White", availability:"Not Available", imageSource:"/assets/product-5.jpeg" },
    {id: 6, name:"Dell Inspiron One 27 Ryzen 7", price:"2145", color:"Silver", availability:"Available", imageSource:"/assets/product-6.webp" },
  ];
}
