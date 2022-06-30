import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCreComponent } from './about-cre.component';

describe('AboutCreComponent', () => {
  let component: AboutCreComponent;
  let fixture: ComponentFixture<AboutCreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
