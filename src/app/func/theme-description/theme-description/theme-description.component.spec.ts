import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDescriptionComponent } from './theme-description.component';

describe('ThemeDescriptionComponent', () => {
  let component: ThemeDescriptionComponent;
  let fixture: ComponentFixture<ThemeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
