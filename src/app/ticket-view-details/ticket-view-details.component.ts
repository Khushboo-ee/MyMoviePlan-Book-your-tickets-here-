import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { MovieTicket } from '../movie-ticket';
import { MovieTicket } from '../movieticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-view-details',
  templateUrl: './ticket-view-details.component.html',
  styleUrls: ['./ticket-view-details.component.css']
})
export class TicketViewDetailsComponent implements OnInit {

  selectedPosterIndex = 0;
  movieTicket: any| MovieTicket;
  //ticketDetails = [];
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.movieTicket = this.activatedRoute.snapshot.data['movieTicket'];
    console.log(this.movieTicket);
  }

  changeIndex(index){
    this.selectedPosterIndex = index;
  }

  buyTicket(ticketId){
    this.router.navigate(["/buyTicket", {
      isSingleTicketCheckout: true, id: ticketId
    }]);
  }

  // public getAllTickets(){
  //   this.ticketService.getAllTickets()
  //   .pipe(
  //     map((X: MovieTicket[], i) => X.map((ticket:MovieTicket) => this.imageProcessing.createImages(ticket)))
  //   )
  //   .subscribe(data=>{
  //       this.ticketDetails = data;
  //       //console.log(data);
  //   });

  // }

}
