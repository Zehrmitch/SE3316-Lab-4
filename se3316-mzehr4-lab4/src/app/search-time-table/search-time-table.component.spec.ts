import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTimeTableComponent } from './search-time-table.component';

describe('SearchTimeTableComponent', () => {
  let component: SearchTimeTableComponent;
  let fixture: ComponentFixture<SearchTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTimeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
