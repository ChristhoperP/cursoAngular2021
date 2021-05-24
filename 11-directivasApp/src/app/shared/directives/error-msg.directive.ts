import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido.';
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string){
    this._color = valor;
    this.setColor();
  };
  @Input() set mensaje(valor: string){
    this._mensaje = valor;
    this.setMensaje();
  };
  @Input() set valido(valor: boolean){
    
  };
  //@Input() mensaje: string ='Este campo es necesario';

  constructor( private el: ElementRef<HTMLElement> ) { 
    console.log('Constructor directive.');
    console.log(el);
    
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {

    /* if (changes.mensaje) {
      const mensaje = changes.mensaje?.currentValue;
      this.htmlElement.nativeElement.innerHTML = mensaje;
    }

    console.log(changes); */
  }
  ngOnInit(): void {
    this.setColor();

    if (this.mensaje) {
      this.setMensaje();
    }
  }

  setEstilo():void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }
  
  setMensaje():void{
    this.htmlElement.nativeElement.innerHTML = this._mensaje;
  }

}
