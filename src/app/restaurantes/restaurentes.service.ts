import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { URI_SERVER_API } from "app/app.api";

import { Restaurante } from "./restaurante/Restaurante.model";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class RestauranteServices {
  constructor(private http: Http) { }

  obterRestaurantes(): Observable<Restaurante[]> {
    return this.http.get(`${URI_SERVER_API}/restaurants`)
      .map((response) => response.json());
  }
}
