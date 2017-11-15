import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameInitials'
})
export class NameInitialsPipe implements PipeTransform {

  transform(fullName: string): string {
    const names = fullName.split(' ');
    return `${names[0].charAt(0)}${names[1].charAt(0)}`;
  }

}
