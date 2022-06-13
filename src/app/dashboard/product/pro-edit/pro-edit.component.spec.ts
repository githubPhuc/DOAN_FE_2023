import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProEditComponent } from './pro-edit.component';

describe('ProEditComponent', () => {
  let component: ProEditComponent;
  let fixture: ComponentFixture<ProEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
