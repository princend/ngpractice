import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(person: Person): string {
    console.log('use pipe');
    return `${person.firstName} ${person.lastName}`;
  }
}
