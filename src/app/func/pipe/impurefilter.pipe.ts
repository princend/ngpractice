import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../person/person';


@Pipe({
  name: 'impurefilter',
  pure: false
})
export class ImpurefilterPipe implements PipeTransform {
  transform(value: Array<Person>,): Array<Person> {
    return value.filter(obj => obj.show);
  }
}
