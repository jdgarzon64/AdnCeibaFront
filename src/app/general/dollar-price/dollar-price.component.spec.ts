import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarPriceComponent } from './dollar-price.component';

describe('DollarPriceComponent', () => {
  let component: DollarPriceComponent;
  let fixture: ComponentFixture<DollarPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollarPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
