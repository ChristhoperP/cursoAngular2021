import { Component } from '@angular/core';

interface MenuItem{
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `]
})
export class MenuComponent {

  menuItems: MenuItem[] = [
    {
      ruta: '/mapas/fullscreen',
      nombre: 'FullScreen',
    },
    {
      ruta: '/mapas/zoom-range',
      nombre: 'zoom-range',
    },
    {
      ruta: '/mapas/marcadores',
      nombre: 'marcadores',
    },
    {
      ruta: '/mapas/propiedades',
      nombre: 'propiedades',
    },
  ]


}
