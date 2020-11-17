import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllSubjectsComponent } from './display-all-subjects.component';

describe('DisplayAllSubjectsComponent', () => {
  let component: DisplayAllSubjectsComponent;
  let fixture: ComponentFixture<DisplayAllSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAllSubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
