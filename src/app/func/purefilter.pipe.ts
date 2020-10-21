import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person';

@Pipe({
  name: 'purefilter'
})
export class PurefilterPipe implements PipeTransform {

  transform(value:Array<Person>,): Array<Person> {
    return value.filter(obj=>obj.show);
  }

}
