import { IndexService } from './../../actions/index.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers/index';
import { Observable } from 'rxjs/Observable';

import * as fromUsers from '../../reducers';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<Array<User>>;

  constructor(
    private store: Store<State>,
    public usersActions: IndexService
  ) { }

  ngOnInit() {
    this.users$ = this.store.select(fromUsers.getAllUsers);
    this.users$.subscribe(console.log);
    this.usersActions.fetchAllUsers();
  }

}
