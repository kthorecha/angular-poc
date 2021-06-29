import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersData: any = [];
  justAnotherBoolean: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      console.log('dddd1')
      this.usersData = data;
      console.log(this.usersData);
    })
  }

  toggleBool() {
    if (this.justAnotherBoolean) {
      this.justAnotherBoolean = false;
    } else {
      this.justAnotherBoolean = true;
    }
  }

}
