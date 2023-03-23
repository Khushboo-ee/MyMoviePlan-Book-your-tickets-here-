import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieTicket } from '../movieticket.model';
import { TicketService } from '../ticket.service';
import {FileHandle} from '../file-handle.model';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-new-ticket',
  templateUrl: './add-new-ticket.component.html',
  styleUrls: ['./add-new-ticket.component.css']
})
export class AddNewTicketComponent implements OnInit {

  ticket: MovieTicket = {
    movieName:"",
    genre:"",
    director:"",
    actors:"",
    language:"",
    description:"",
    actualPrice:0,
    discountedPrice:0,
    moviePoster: []
  }
  constructor(
    private ticketService:TicketService,
    private sanitizer: DomSanitizer,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.ticket = this.activatedRoute.snapshot.data['movieTicket']; //movieTicket is key assigned in approutingmodule.ts, storing these values from backend to ticket and this ticket is binded with the html component
  }

  // addTicket(ticketForm:NgForm){
  //   console.log(this.ticket);
  // }

  //here earlier we used this.ticket inside addTicket() but now we need to send FormData
  addTicket(ticketForm:NgForm){

   const ticketFormData = this.prepareFormData(this.ticket);

this.ticketService.addTicket(ticketFormData).subscribe(
  (response:MovieTicket)=>{
    ticketForm.reset();
// console.log(response);
},
(error:HttpErrorResponse)=>{
  console.log(error);
})
  }


prepareFormData(ticket:MovieTicket): FormData{
const formData = new FormData();

formData.append(
  'movieticket', //appending movieticket details.
  new Blob([JSON.stringify(ticket)], {type: 'application/json'} )
);
//for appnding multiple images
for (let i = 0; i < ticket.moviePoster.length; i++) {
  formData.append(
    'posters',
    ticket.moviePoster[i].file,
    ticket.moviePoster[i].file.name
  );
  }
  return formData;
}

  onFileSelection(event){
    //console.log(event); -->will print all the filr details in the console like filename size lastmodified date etc.
    if (event.target.files) {
    const img =  event.target.files[0];
//file-->FileHandle model, img-->declared const
//for using url-->DOM sanitizer
      const fileHandle : FileHandle = {
        file: img,
        url:this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(img)
        )
      }

      this.ticket.moviePoster.push(fileHandle);

    }
  }

  removeImage(i:number){
    this.ticket.moviePoster.splice(i, 1);
  }

}

