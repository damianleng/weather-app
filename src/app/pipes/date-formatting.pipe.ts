import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatting'
})
export class DateFormattingPipe implements PipeTransform {

  transform(unixTimestamp: string): unknown {
    const date = new Date(+unixTimestamp * 1000);
    return date.toDateString();
  }
}