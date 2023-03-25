import { Component, OnInit } from '@angular/core';
import { MyOrderDetails } from '../myorders.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrderDetails: MyOrderDetails[] = [];

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.getMyOrderDetails();
  }

  getMyOrderDetails(){
    this.ticketService.getMyOrderDetails().subscribe(
      (response: MyOrderDetails[]) => {
        console.log(response);
        this.myOrderDetails = response;
      },
      (error) => {
        console.log(error);
      }
      )
  }

}
