import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmationMsgComponent } from './order-confirmation-msg.component';

describe('OrderConfirmationMsgComponent', () => {
  let component: OrderConfirmationMsgComponent;
  let fixture: ComponentFixture<OrderConfirmationMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConfirmationMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmationMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
