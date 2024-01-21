import { Injectable } from '@angular/core';
import { MyDatePipe } from '../my-date.pipe';

@Injectable({
  providedIn: 'root'
})
export class TransDateService {

  constructor(private myDate:MyDatePipe) { }

  transDate(s:Date) {
    return this.myDate.transform(s)
  }
}
