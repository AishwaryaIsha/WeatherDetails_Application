import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'TempConvert'
})

export class SearchPipe implements PipeTransform {
    transform(value: number, multiply: string): number { 
        let mul = parseFloat(multiply); 
        return Math.floor(value-mul);
     }
}

