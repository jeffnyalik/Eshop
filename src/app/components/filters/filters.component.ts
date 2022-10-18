import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();
  categories = ["Shoes", "Shorts", "Dress", "Stationary"]
  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory = (category:string):void  =>{
    this.showCategory.emit(category)
  }

}
