import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDepotComponent } from './product-depot.component';

describe('ProductDepotComponent', () => {
  let component: ProductDepotComponent;
  let fixture: ComponentFixture<ProductDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
