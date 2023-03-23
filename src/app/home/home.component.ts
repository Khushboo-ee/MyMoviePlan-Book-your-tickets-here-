import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { MovieTicket } from '../movieticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ticketDetails = [];
  constructor(private ticketService:TicketService,
    private imageProcessing:ImageProcessingService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getAllTickets();
  }

  public getAllTickets(){
    this.ticketService.getAllTickets()
    .pipe(
      map((X: MovieTicket[], i) => X.map((ticket:MovieTicket) => this.imageProcessing.createImages(ticket)))
    )
    .subscribe(data=>{
        this.ticketDetails = data;
        console.log(data);
    });

  }

  showTicketDetails(ticketId){
    this.router.navigate(['/ticketViewDetails', {ticketId: ticketId}]);//const id = route.paramMap.get("ticketId"); this code inside resolve{} n ticket-resolver.service.ts this"tickerId" is what is mentioned here with path i.e ticketid
  }
}
