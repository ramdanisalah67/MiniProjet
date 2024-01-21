import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe){}
  transform(value: string | Date, format: string = 'yyyy-MM-dd'): string {
    
    return this.datePipe.transform(value, format) || '';
  }

}
