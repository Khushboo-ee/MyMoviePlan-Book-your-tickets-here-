import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartDetails:any[] = [];

  constructor(
    private ticketService:TicketService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getCartDetails();
  }

  getCartDetails(){
    this.ticketService.getCartDetails().subscribe(
      (response:any[]) =>{
        console.log(response);
        this.cartDetails = response;
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  checkout(){

   
      this.router.navigate(["/buyTicket", {
        isSingleTicketCheckout: false, id: 0
      }]);
    

    // this.ticketService.getTicketDetails(false, 0).subscribe(
    //   (resp) => {
    //     console.log(resp);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )
  }

  delete(cartId){
      console.log(cartId);
      this.ticketService.deleteCartItem(cartId).subscribe(
        (resp) =>{
          console.log(resp);
          this.getCartDetails();
        },
        (error) => {
          console.log(error);
        });
  }

}
