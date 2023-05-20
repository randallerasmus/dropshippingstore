import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsCancellationsComponent } from './returns-cancellations.component';

describe('ReturnsCancellationsComponent', () => {
  let component: ReturnsCancellationsComponent;
  let fixture: ComponentFixture<ReturnsCancellationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnsCancellationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnsCancellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
