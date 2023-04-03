import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimals',
})
export class DecimalsPipe implements PipeTransform {
  transform(value: number, precision: number): string {
    let strValue = value.toFixed(precision);

    if (!strValue.includes('.')) {
      strValue = this.setDots(strValue);
      return `${strValue},00`;
    }

    const strDecimal = strValue.split('.')[1];
    strValue = strValue.replace('.', ',');

    if (strDecimal.length == 1) {
      return `${strValue}0`;
    }

    strValue = this.setDots(strValue);

    return strValue;
  }

  setDots(value: string): string {
    value = value.replace(',', '.');
    const hasValue = parseFloat(value) > 0;

    if (hasValue) {
      const valuesList = value.split('.');
      const integerPart = valuesList[0];
      const limit = integerPart.length * -1 + 2;
      let result = integerPart.slice(-3);

      for (let i = -3; i > limit; i -= 3) {
        result = '.' + result;
        result = integerPart.slice(i - 3, i) + result;
      }

      return `${result},${valuesList[1]}`;
    }

    return '';
  }
}
