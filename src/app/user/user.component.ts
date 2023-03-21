import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  msg;
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.forUser();
  }

  forUser(){
    this.userService.forUser().subscribe((response) =>
     {console.log(response);
      this.msg = response;
    },
    (errror) => {
      console.log(errror);
    }
    );
  }

}
