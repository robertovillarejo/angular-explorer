import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User>;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        name: "Roberto Villarejo",
        stars: 5
      },
      {
        name: "Lluvia Gama",
        stars: 3
      }
    ];
  }

}
