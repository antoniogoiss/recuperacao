import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PecasService } from './pecas.service';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [AppComponent, DetalhesComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PecasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
