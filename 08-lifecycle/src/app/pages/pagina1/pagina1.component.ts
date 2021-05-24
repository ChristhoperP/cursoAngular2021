import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Fernando';
  segundos: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log('Constructor');
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
    
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado.');
    
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe(i=>{
      this.segundos = i;
    })
  }

  guardar(){

  }

}
