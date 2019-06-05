import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSeekerComponent } from './filter-seeker.component';

describe('FilterSeekerComponent', () => {
  let component: FilterSeekerComponent;
  let fixture: ComponentFixture<FilterSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
