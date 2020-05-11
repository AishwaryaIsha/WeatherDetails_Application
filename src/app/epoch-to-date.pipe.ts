import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epochToDate'
})
export class EpochToDatePipe implements PipeTransform {

  transform(value: number): string { 
    let myDate = new Date(value * 1000);
    let mynewDate=myDate.toDateString();
    return mynewDate;
 }

}
