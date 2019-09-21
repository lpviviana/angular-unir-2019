export interface ILogger {
  
  log(msg:any):void;
  error(msg:any):void;
  warn(msg:any):void;
}
import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService  implements ILogger{

  //constructor() { }
  log(msg:any):void{console.log(msg);}
  error(msg:any):void{console.error(msg);}
  warn(msg:any):void{console.warn(msg);}


}
