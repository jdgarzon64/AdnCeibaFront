import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPaymentComponent } from './pop-up-payment.component';

describe('PopUpPaymentComponent', () => {
  let component: PopUpPaymentComponent;
  let fixture: ComponentFixture<PopUpPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
