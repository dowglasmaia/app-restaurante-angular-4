import { Restaurante } from './restaurante/Restaurante.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = [];

  constructor() { }

  ngOnInit() {
  }

}
