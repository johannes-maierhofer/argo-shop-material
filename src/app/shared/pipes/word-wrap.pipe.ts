import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordWrap'
})
export class WordWrapPipe implements PipeTransform {

  transform(value: any, length: number): unknown {
    value = value || ''; // not null
    value = '' + value; // to string
    return value.length <= length
      ? value
      : `${value.substring(0, length)}...`;
  }
}
