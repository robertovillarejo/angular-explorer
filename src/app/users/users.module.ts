import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { NameInitialsPipe } from './pipes/name-initials.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', 
        component: UserListComponent
      }
    ])
  ],
  declarations: [UserCardComponent, UserListComponent, NameInitialsPipe]
})
export class UsersModule { }
