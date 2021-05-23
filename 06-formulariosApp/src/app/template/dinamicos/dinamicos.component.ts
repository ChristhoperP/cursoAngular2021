import { Component } from '@angular/core';

interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      {id:1,nombre:'Hoal'},
      {id:2,nombre:'mundo'}
    ]
  }

  nuevoJuego:string='';

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

  guardar(){
    console.log('formudsfhjsajkdl');
  }

}
