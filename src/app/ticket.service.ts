import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieTicket } from './movieticket.model';
import { MyOrderDetails } from './myorders.model';
import { OrderDetails } from './order_detail.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private httpClient: HttpClient
  ) { }


  //this has to be called at the time we click on place order on ui
  public createTransaction(amount){
    return this.httpClient.get("http://localhost:8080/createTransaction/"+amount)
  }


  public markAsWatched(orderId){
    return this.httpClient.get("http://localhost:8080/markOrderWatched/" + orderId);
  }


  public getAllOrderDetails(status:string): Observable<MyOrderDetails[]>{
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:8080/getAllOrderDetails/"+status);
  }

  public getMyOrderDetails() : Observable<MyOrderDetails[]>{
    return this.httpClient.get<MyOrderDetails[]>("http://localhost:8080/getOrderDetails")
  }

  public deleteCartItem(cartId){
    return this.httpClient.delete("http://localhost:8080/deleteCartItem/"+ cartId);
  }

  public addTicket(ticket: FormData) {
    return this.httpClient.post<MovieTicket>("http://localhost:8080/movieticket/add", ticket);
  }

  public getAllTickets() {
    return this.httpClient.get<MovieTicket[]>("http://localhost:8080/movieticket/showall");
  }

  public deleteTicket(ticketId: number) {
    return this.httpClient.delete("http://localhost:8080/deleteticket/" + ticketId);
  }

  public GetTicketById(ticketId) {
    return this.httpClient.get<MovieTicket>("http://localhost:8080/getTicketById/" + ticketId);
  }

  public getTicketDetails(isSingleTicketCheckout, ticketId) {
    return this.httpClient.get<MovieTicket[]>("http://localhost:8080/getTicketDetails/" + isSingleTicketCheckout + "/" + ticketId)
  }

  public placeOrder(orderDetails: OrderDetails,isCartCheckout){
    return this.httpClient.post("http://localhost:8080/place/order/"+isCartCheckout,orderDetails);
  }

  public addToCart(ticketId){
    return this.httpClient.get("http://localhost:8080/addToCart/"+ticketId);
  }

  public getCartDetails(){
    return this.httpClient.get("http://localhost:8080/getCartDetails");
  }

}
//at backend earlier when we were storing only data we used @RequestBody but for storing files at backend we made it to multipart file--> change the type of ticket:FormData from MovieTicket(earlier).--->ticket as Formdata inside add-new-TcketComponent as well