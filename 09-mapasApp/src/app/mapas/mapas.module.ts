import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MinMapaComponent } from './components/min-mapa/min-mapa.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';


@NgModule({
  declarations: [
    MinMapaComponent,
    FullScreenComponent,
    ZoomRangeComponent,
    PropiedadesComponent,
    MarcadoresComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
