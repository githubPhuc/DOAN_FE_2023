import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceInvComponent } from './acceptance-inv.component';

describe('AcceptanceInvComponent', () => {
  let component: AcceptanceInvComponent;
  let fixture: ComponentFixture<AcceptanceInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptanceInvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptanceInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
