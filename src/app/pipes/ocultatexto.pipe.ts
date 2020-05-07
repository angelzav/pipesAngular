import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultatexto'
})
export class OcultatextoPipe implements PipeTransform {

  transform(value: string, activo:boolean): string {
    return ( activo ) ? '*'.repeat(value.length) : value;
    // if (activo) {
    //   let mascara: string = "";
    //   for (let i = 0; i < value.length; i++) {
    //     mascara = mascara + "*";
    //   }
    //   return mascara;
    // } else{
    //   return value;
    // }    
  }

}
