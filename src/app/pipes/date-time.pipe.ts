import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimePT_BR',
})
export class DateTimePipe implements PipeTransform {
  transform(dateTime: string): string {
    const dateIso: Date = new Date(dateTime);
    const dateList: string[] = dateIso
      .toLocaleString('pt-BR', { timeZone: 'UTC' })
      .split(',');

    return `${dateList[0]}, às ${dateList[1]}`;
  }
}
