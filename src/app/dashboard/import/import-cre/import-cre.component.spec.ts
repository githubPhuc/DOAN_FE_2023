import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCreComponent } from './import-cre.component';

describe('ImportCreComponent', () => {
  let component: ImportCreComponent;
  let fixture: ComponentFixture<ImportCreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportCreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
