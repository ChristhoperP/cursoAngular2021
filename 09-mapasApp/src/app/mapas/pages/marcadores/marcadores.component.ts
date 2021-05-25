import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface marcadorColor{
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [`
    .mapa-container{
      height: 100%;
      width: 100%;
    }

    .list-group{
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
      width:150px;
    }
    li{
      cursor: pointer;
    }
  `]
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;
  
  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] =[-87.16986910039877, 14.084552176808293];

  marcadores: marcadorColor[]=[];

  constructor() { }

  ngAfterViewInit(): void {

    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.leerLocalStorage();

    /* const marker = new mapboxgl.Marker()
      .setLngLat(this.center)
      .addTo(this.mapa); */
  }

  agregarMarcador(){
    
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat(this.center)
      .addTo(this.mapa);

    this.marcadores.push({color, marker: nuevoMarcador});

    this.guardarMarcadoresLocalStorage();

    nuevoMarcador.on('dragend', ()=>{
      this.guardarMarcadoresLocalStorage();
    });
  }

  iraMarcador( marcador: marcadorColor){
    
    this.mapa.flyTo({
      center: marcador.marker!.getLngLat()
    })
  }

  guardarMarcadoresLocalStorage(){

    const lngLatArr: marcadorColor[] = [];

    this.marcadores.forEach(m=>{

      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({color, centro: [lng, lat]});

    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr) );

  }

  leerLocalStorage(){
    if (!localStorage.getItem('marcadores')) {
      return;
    }

    const lngLatArr: marcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    lngLatArr.forEach(m => {
      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat( m.centro! )
        .addTo( this.mapa );

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      });

      newMarker.on('dragend', ()=>{
        this.guardarMarcadoresLocalStorage();
      });
    });
  }

  borrarMarcador( i: number ){
    console.log('dsfdsfefd');
    
    this.marcadores[i].marker?.remove();
    this.marcadores.splice(i,1);
    this.guardarMarcadoresLocalStorage();
  }

}
