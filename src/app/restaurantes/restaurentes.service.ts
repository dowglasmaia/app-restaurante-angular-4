import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { URI_SERVER_API } from "app/app.api";

import { Restaurante } from "./restaurante/Restaurante.model";
import { ErrorHandler } from "app/app.error-handler";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class RestauranteServices {
  constructor(private http: Http) { }

  public obterRestaurantes(): Observable<Restaurante[]> {
    return this.http.get(`${URI_SERVER_API}/restaurants`)
      .map((response) => response.json())
      .catch(ErrorHandler.handlerError);
  }

  public obterRestaurantePorId(id: string): Observable<Restaurante> {
    return this.http.get(`${URI_SERVER_API}/restaurants/${id}`)
      .map((response) => response.json())
      .catch(ErrorHandler.handlerError);
  }

}
