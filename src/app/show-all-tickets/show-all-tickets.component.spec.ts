import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTicketsComponent } from './show-all-tickets.component';

describe('ShowAllTicketsComponent', () => {
  let component: ShowAllTicketsComponent;
  let fixture: ComponentFixture<ShowAllTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
