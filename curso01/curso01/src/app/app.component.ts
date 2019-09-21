import { Component, OnInit } from '@angular/core';
import { TimeInfo } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso01';
  user='Viviana';
  role="Admin";

  
  valor1=1;
  valor2=1;
  suma=0;
  ngOnInit(){
    this.calcularSuma();
  }
  onLogout(evenInfo:TimeInfo):void{
    console.log('El usuario '+evenInfo.name + 'hizo logout a horas '+ evenInfo.timestamp);
  }
  valorCambio1(value:number):void{
    this.valor1=value;
    this.calcularSuma();
  }
  valorCambio2(value:number):void{
    this.valor2=value;
    this.calcularSuma();
  }
  calcularSuma(){
    this.suma=this.valor1+this.valor2;
  }
}
