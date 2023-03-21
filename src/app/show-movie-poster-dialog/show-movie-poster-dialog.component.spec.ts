import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoviePosterDialogComponent } from './show-movie-poster-dialog.component';

describe('ShowMoviePosterDialogComponent', () => {
  let component: ShowMoviePosterDialogComponent;
  let fixture: ComponentFixture<ShowMoviePosterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMoviePosterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMoviePosterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
