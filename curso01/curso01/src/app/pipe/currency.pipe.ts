import { Pipe, PipeTransform } from '@angular/core';
import { IfStmt } from '@angular/compiler';

/**
 * 123 EUR -->123.00 E
 * 345.3 USD-->$ 345.30
 */
@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: Number, ...args: any[]): any {
    const currency=args.length>0?
    args[0].toString().toUpperCase():
    'EUR';
  if(value==null){
  return '';
  }
    switch (currency) {
      case 'EUR':
          return value.toFixed(2).replace('.',',')+' E';
      case 'USD':
       return '$ '+ value.toFixed(2).replace('.',',');
      default:
        return value.toFixed(2).replace('.',',')+ ' E';
    }

  }

}
