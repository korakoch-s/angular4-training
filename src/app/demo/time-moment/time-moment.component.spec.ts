import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeMomentComponent } from './time-moment.component';

describe('TimeMomentComponent', () => {
  let component: TimeMomentComponent;
  let fixture: ComponentFixture<TimeMomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeMomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
