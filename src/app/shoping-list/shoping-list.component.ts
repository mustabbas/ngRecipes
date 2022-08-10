import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient_model';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  ingredients: ingredient[] = [
    new ingredient('apple',5),
    new ingredient('tomato',10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
