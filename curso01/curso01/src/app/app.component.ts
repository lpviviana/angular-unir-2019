import { Component, OnInit } from '@angular/core';
import { TimeInfo } from './user-profile/user-profile.component';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[
    Logger2Service
   //{provide:LoggerService,useClass:Logger2Service}  
  ]
})
export class AppComponent implements OnInit {

  title = 'Curso Angular';
  user='Viviana';
  role="Admin";

  
  valor1=1;
  valor2=1;
  suma=0;

  constructor(private logger:LoggerService){

  }
  ngOnInit(){

    this.calcularSuma();
  }
  onLogout(evenInfo:TimeInfo):void{
    this.logger.log('El usuario '+evenInfo.name + ' hizo logout a horas '+ evenInfo.timestamp);
    if(this.role)
    this.logger.log('El rol es :'+ this.role);
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
