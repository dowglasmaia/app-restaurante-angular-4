import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ROUTES } from './app.routes';

import { RestauranteMenuItemComponent } from './restaurantes/restaurante-menu-item/restaurante-menu-item.component';
import { RestauranteDatalheMenuComponent } from './restaurantes/restaurante-datalhe-menu/restaurante-datalhe-menu.component';
import { RestauranteCarrinhoComprasComponent } from './restaurantes/restaurante-carrinho-compras/restaurante-carrinho-compras.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component';
import { RestauranteServices } from './restaurantes/restaurentes.service';
import { RestaurantesDatalhesComponent } from './restaurantes/restaurantes-datalhes/restaurantes-datalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestaurantesDatalhesComponent,
    RestauranteDatalheMenuComponent ,
    RestauranteCarrinhoComprasComponent,
    RestauranteMenuItemComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),


  ],

  providers: [
    RestauranteServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
