import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailUserComponent } from './invoice-detail-user.component';

describe('InvoiceDetailUserComponent', () => {
  let component: InvoiceDetailUserComponent;
  let fixture: ComponentFixture<InvoiceDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceDetailUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
