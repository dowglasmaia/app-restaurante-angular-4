import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestauranteServices } from './../../services/restaurentes.service';

import { Observable } from "rxjs/Observable";

@Component({
  selector: 'mt-restaurante-avaliacao',
  templateUrl: './restaurante-avaliacao.component.html'
})
export class RestauranteAvaliacaoComponent implements OnInit {

  avaliacoes: Observable<any>;

  constructor(
    protected restauranteService: RestauranteServices,
    protected route: ActivatedRoute) { }

  ngOnInit() {
    this.avaliacoes = this.obterAvaliacoes(this.route.parent.snapshot.params['id'])

  }

  private obterAvaliacoes(id: string): Observable<any> {
    return this.restauranteService.obterAvaliacoesDeRestaurantePorId(id);
  }

}
