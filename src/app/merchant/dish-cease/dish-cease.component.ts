import { Component, OnInit } from '@angular/core';
import {Dish} from '../../model/dish';

@Component({
  selector: 'app-dish-cease',
  templateUrl: './dish-cease.component.html',
  styleUrls: ['./dish-cease.component.css']
})
export class DishCeaseComponent implements OnInit {
  dish: Dish = {};
  constructor() { }

  ngOnInit() {
  }

}
