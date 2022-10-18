import { Component, OnInit } from '@angular/core';
const ROW_HEIGHTS: {[id:number]: number} = {1: 400, 3: 335, 4: 450};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROW_HEIGHTS[this.cols]
  categories: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number):void{
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHTS[this.cols]

  }

  onShowCategory(newCategory:string):void{
    this.categories = newCategory;
  }

}
