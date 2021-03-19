import { Pipe, PipeTransform } from '@angular/core';
import { FBUser } from 'src/app/models/FBUser';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value: FBUser[], filterBy: string): FBUser[] {

    if (filterBy != '') {
      return value.filter((user: FBUser) => user.displayName?.includes(filterBy));
    } 
    else{
      return value;
    } 
  }

}
