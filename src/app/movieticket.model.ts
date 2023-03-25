import { FileHandle } from "./file-handle.model";

export interface MovieTicket{
    //ticketId:number,
    movieName:string,
    genre:string,
    director:string,
    actors:string,
    language:string,
    description:string,
    actualPrice:number,
    discountedPrice:number,
    moviePoster:FileHandle[]
}