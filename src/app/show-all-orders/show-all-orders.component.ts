import { Component, OnInit } from '@angular/core';
import { OrderDetails } from '../order_detail.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-show-all-orders',
  templateUrl: './show-all-orders.component.html',
  styleUrls: ['./show-all-orders.component.css']
})
export class ShowAllOrdersComponent implements OnInit {

  allOrderDetails = [];

  status:string = 'All';

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.getAllOrderDetailsForAdmin(this.status);
  }

  public getAllOrderDetailsForAdmin(statusParameter: string){
    this.ticketService.getAllOrderDetails(statusParameter).subscribe(
      (resp) => {
        this.allOrderDetails = resp;
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
      )
  }

  markAsWatched(orderId){
    console.log(orderId);
    this.ticketService.markAsWatched(orderId).subscribe(
      (resp) => {
        console.log(resp);
        this.getAllOrderDetailsForAdmin(this.status);
      },
      (err) => {
        console.log(err);
      }
      )
  }

}
