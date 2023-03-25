import { OrderQuantity } from "./order_quantity.model";

export interface OrderDetails {
    fullName:string;
	fullAddress:string;
	contactNumber:string;
	alternateContactNumber:string;
	transactionId: string;
	orderTicketQuantity:OrderQuantity[];
    //as this is an array a new model class has to be created --> OrderQuantity
}