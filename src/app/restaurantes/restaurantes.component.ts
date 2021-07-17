import { RestauranteServices } from './restaurentes.service';
import { Restaurante } from './restaurante/Restaurante.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html'
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[] = [];

  constructor(
    private restauranteServices: RestauranteServices

  ) { }

  ngOnInit() {

    this.obterRestaurantes();

  }

  private obterRestaurantes() {
    this.restauranteServices.obterRestaurantes().subscribe(
      restaurantes => this.restaurantes = restaurantes);
  }

}
