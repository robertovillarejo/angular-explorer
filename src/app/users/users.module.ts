import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { NameInitialsPipe } from './pipes/name-initials.pipe';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':username/profile',
        component: UserProfileComponent
      },
      {
        path: '', 
        component: UserListComponent
      }
    ])
  ],
  declarations: [UserCardComponent, UserListComponent, NameInitialsPipe, UserDetailComponent, UserProfileComponent]
})
export class UsersModule { }
