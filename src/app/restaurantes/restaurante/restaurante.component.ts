import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from './Restaurante.model';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {

  @Input() restaurante: Restaurante;
   
  constructor() { }

  ngOnInit() {
  }

}
