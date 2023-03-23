import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieTicket } from './movieticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private httpClient: HttpClient
  ) { }

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

}
//at backend earlier when we were storing only data we used @RequestBody but for storing files at backend we made it to multipart file--> change the type of ticket:FormData from MovieTicket(earlier).--->ticket as Formdata inside add-new-TcketComponent as well