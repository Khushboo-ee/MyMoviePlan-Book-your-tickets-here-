import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './file-handle.model';
import { MovieTicket } from './movieticket.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {

  constructor(private sanitizer:DomSanitizer) { }

  public createImages( ticket: MovieTicket ){
    const moviePoster: any[] = ticket.moviePoster;

    const posterToFilHandle: FileHandle[] = [];

    for (let i = 0; i < moviePoster.length; i++) {
     const imageFileData = moviePoster[i]; 

     const imageBlob = this.dataURItoBlob(imageFileData.pic,imageFileData.type);

     const imageFile = new File([imageBlob], imageFileData.name, { type:imageFileData.type });

     const finalFileHandle:FileHandle = {
      file: imageFile,
      url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
     };

     posterToFilHandle.push(finalFileHandle);

    }

     ticket.moviePoster = posterToFilHandle;
     return ticket;
  }

  public dataURItoBlob(pic, type){
    const byteString = window.atob(pic);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    
    for (let i = 0; i < byteString.length; i++) {
     int8Array[i] = byteString.charCodeAt(i); 
    }

    const blob = new Blob([int8Array],{type:type});
    return blob;

  }  

}
