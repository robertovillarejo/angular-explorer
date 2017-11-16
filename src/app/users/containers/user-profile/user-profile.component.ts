import { IndexService } from './../../actions/index.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  frm: FormGroup;
  password: string;
  passwordConfirm: string;
  

  constructor(
    private route: ActivatedRoute,
    usersActions: IndexService
  ) { 

  }

  ngOnInit() {
  }

}
