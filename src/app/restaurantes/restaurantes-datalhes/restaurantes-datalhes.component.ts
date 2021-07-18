import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from '../restaurante/Restaurante.model';

import { RestauranteServices } from './../restaurentes.service';

@Component({
  selector: 'mt-restaurantes-datalhes',
  templateUrl: './restaurantes-datalhes.component.html'
})
export class RestaurantesDatalhesComponent implements OnInit  {

  constructor(
    protected restauranteService: RestauranteServices,
    protected route: ActivatedRoute) { }

  restaurante: Restaurante;

  ngOnInit() {

    this.obterRestaurantePorId( this.route.snapshot.params['id'] );

  }

  private obterRestaurantePorId(id: string) {
    this.restauranteService.obterRestaurantePorId(id)
      .subscribe(response => this.restaurante = response)
  }

}
