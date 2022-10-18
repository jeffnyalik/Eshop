import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cols = 3;
  categories: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNum: number):void{
    this.cols = colsNum;
  }

  onShowCategory(newCategory:string):void{
    this.categories = newCategory;
  }

}
