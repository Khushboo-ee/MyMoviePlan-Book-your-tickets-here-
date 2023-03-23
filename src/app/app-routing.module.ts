import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { BuyTicketResolverService } from './buy-ticket-resolver.service';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShowAllTicketsComponent } from './show-all-tickets/show-all-tickets.component';
import { ShowMoviePosterDialogComponent } from './show-movie-poster-dialog/show-movie-poster-dialog.component';
import { TicketResolverService } from './ticket-resolver.service';
import { TicketViewDetailsComponent } from './ticket-view-details/ticket-view-details.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'user',component:UserComponent, canActivate:[AuthGuard], data:{roles:['User']}},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'addNewTicket',component:AddNewTicketComponent, canActivate:[AuthGuard], data:{roles:['Admin']}, resolve:{movieTicket: TicketResolverService} },
  {path:'showAllTickets',component:ShowAllTicketsComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  {path:'showPoster',component:ShowMoviePosterDialogComponent},
  {path:'ticketViewDetails',component:TicketViewDetailsComponent,resolve:{movieTicket: TicketResolverService}},
  {path:'buyTicket',component:BuyTicketComponent,canActivate:[AuthGuard], data:{roles:['User']}, resolve:{ticketDetails: BuyTicketResolverService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
