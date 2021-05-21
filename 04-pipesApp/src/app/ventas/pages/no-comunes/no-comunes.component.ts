import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = "Christhoper";
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Ana'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando'
  }

  texto: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et quae at reiciendis ducimus mollitia quo modi eveniet voluptatum officiis. Cumque consectetur asperiores laudantium dolor fuga dignissimos. Eos, aliquid! Neque.';


  cambiarCliente() {
    var answers = [{nombre:"Christhoper", genero: 'masculino'}, 
                    {nombre:"Hernando", genero: 'masculino'}, 
                    {nombre:"Maria", genero: 'femenino'},
                    {nombre:"Ana", genero: 'femenino'},];
    var index = Math.floor(Math.random() * answers.length);
    this.nombre = answers[index].nombre;
    this.genero = answers[index].genero;
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data de la promesa');
    }, 3500);
  });

}
