import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSuppComponent } from './edit-supp.component';

describe('EditSuppComponent', () => {
  let component: EditSuppComponent;
  let fixture: ComponentFixture<EditSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
