import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHandle } from '../file-handle.model';

@Component({
  selector: 'app-show-movie-poster-dialog',
  templateUrl: './show-movie-poster-dialog.component.html',
  styleUrls: ['./show-movie-poster-dialog.component.css']
})
export class ShowMoviePosterDialogComponent implements OnInit {
 
  constructor(@Inject (MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.recieveImages();
  }

  recieveImages(){
    console.log(this.data);
  }

}
