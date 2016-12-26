import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "ellipsis"
})

export class EllipsisPipe implements PipeTransform {
    // adds ... if the string length > lettersLength
    transform(val:string, lettersLength:number=10) {
        return val.length > lettersLength ? val.substring(0, lettersLength) + '...':  val;
    }
}
