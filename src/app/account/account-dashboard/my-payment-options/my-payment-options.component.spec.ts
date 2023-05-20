import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaymentOptionsComponent } from './my-payment-options.component';

describe('MyPaymentOptionsComponent', () => {
  let component: MyPaymentOptionsComponent;
  let fixture: ComponentFixture<MyPaymentOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPaymentOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPaymentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
