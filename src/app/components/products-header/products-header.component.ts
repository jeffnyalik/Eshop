import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  productsCount:number = 20;
  constructor() { }

  ngOnInit(): void {
  }

  onProductsUpate  = (count: number):void =>{
    this.productsCount = count
  }

  onColumnsUpdated = (colsNum:number):void =>{
    this.columnsCountChange.emit(colsNum);
  }

}
