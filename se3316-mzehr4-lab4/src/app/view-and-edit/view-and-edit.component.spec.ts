import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAndEditComponent } from './view-and-edit.component';

describe('ViewAndEditComponent', () => {
  let component: ViewAndEditComponent;
  let fixture: ComponentFixture<ViewAndEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAndEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAndEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
