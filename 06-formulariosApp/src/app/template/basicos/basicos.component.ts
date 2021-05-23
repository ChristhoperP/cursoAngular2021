import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX',
    precio: 12,
    existencias: 12
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid &&
           this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.value<0 &&
           this.miFormulario?.controls.precio?.touched;
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    //console.log(this.miFormulario);
    console.log('Posteo exitoso');
    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0
    });
  }

}
