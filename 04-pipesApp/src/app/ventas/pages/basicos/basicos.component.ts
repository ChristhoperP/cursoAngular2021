import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'christhoper';
  nombreUpper: string = 'CHRISTHOPER';
  nombreCompleto: string = 'chrISthOper portTilLo';

  fecha: Date = new Date();


}
