import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.productsService.getData()
    .subscribe(data => console.log(data));
  }
}