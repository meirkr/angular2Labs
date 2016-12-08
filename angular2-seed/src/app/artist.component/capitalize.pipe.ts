import { Pipe, PipeTransform } from '@angular/core';

@Pipe(
  {name: 'capitalize'}
)

export class CapitalizePipe implements PipeTransform {
  //  // change the first char to lower case
  // transform(value: string, args: string[]): any {
  //   if (!value) return value;
  //
  //   return value.replace(/\w\S*/g, function(txt) {
  //     return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();
  //   });
  // }

  // // removes white spaces
  // transform(value){
  //   return value.replace(/ /g, "");
  // }

  // adds ... if the string length > 10
  transform(val) {
    if (val.length > 10) {
      return val.substring(0, 10) + '...';
    } else {
      return val;
    }
  }
}
