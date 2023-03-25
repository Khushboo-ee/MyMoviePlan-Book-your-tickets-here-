import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
import { UserService } from './user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddNewTicketComponent } from './add-new-ticket/add-new-ticket.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ShowAllTicketsComponent } from './show-all-tickets/show-all-tickets.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { ShowMoviePosterDialogComponent } from './show-movie-poster-dialog/show-movie-poster-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TicketViewDetailsComponent } from './ticket-view-details/ticket-view-details.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { OrderConfirmationMsgComponent } from './order-confirmation-msg/order-confirmation-msg.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShowAllOrdersComponent } from './show-all-orders/show-all-orders.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    AddNewTicketComponent,
    ShowAllTicketsComponent,
    ShowMoviePosterDialogComponent,
    TicketViewDetailsComponent,
    BuyTicketComponent,
    OrderConfirmationMsgComponent,
    UserRegisterComponent,
    CartComponent,
    MyOrdersComponent,
    ShowAllOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
