import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {
  transform(person: { firstName: string, lastName: string }): string {
    console.log('use pipe');
    return `${person.firstName} ${person.lastName}`;
  }
}
