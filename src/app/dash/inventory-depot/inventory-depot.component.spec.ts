import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDepotComponent } from './inventory-depot.component';

describe('InventoryDepotComponent', () => {
  let component: InventoryDepotComponent;
  let fixture: ComponentFixture<InventoryDepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryDepotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
