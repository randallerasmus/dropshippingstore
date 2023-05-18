import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickLookComponent } from './quick-look.component';

describe('QuickLookComponent', () => {
  let component: QuickLookComponent;
  let fixture: ComponentFixture<QuickLookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickLookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
