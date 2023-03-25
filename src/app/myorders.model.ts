import { MovieTicket } from "./movieticket.model";

export interface MyOrderDetails{

    orderId:number;
    orderFullname:string;
    orderFullAddress:string;
    orderContactNumber:string;
    orderAmount:number;
    orderAlternateNumber:string;
    orderStatus:string;
    movieTicket :MovieTicket;
    user: any;

}