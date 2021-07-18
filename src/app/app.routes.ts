import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantesDatalhesComponent } from './restaurantes/restaurantes-datalhes/restaurantes-datalhes.component';

export const ROUTES: Routes = [

    { path: '', component: HomeComponent },

    { path: 'restaurantes', component: RestaurantesComponent },

    { path: 'restaurantes/:id', component: RestaurantesDatalhesComponent },

    { path: 'about', component: AboutComponent },
  ]
