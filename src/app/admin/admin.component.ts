import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  msg;
  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  forAdmin(){
    this.userService.forAdmin().subscribe((response) =>
     {console.log(response);
      this.msg = response;
    },
    (errror) => {
      console.log(errror);
    }
    );
  }

}
