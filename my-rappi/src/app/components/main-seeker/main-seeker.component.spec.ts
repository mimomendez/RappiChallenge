import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSeekerComponent } from './main-seeker.component';

describe('MainSeekerComponent', () => {
  let component: MainSeekerComponent;
  let fixture: ComponentFixture<MainSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
