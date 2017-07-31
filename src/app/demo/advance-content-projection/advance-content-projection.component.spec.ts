import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceContentProjectionComponent } from './advance-content-projection.component';

describe('AdvanceContentProjectionComponent', () => {
  let component: AdvanceContentProjectionComponent;
  let fixture: ComponentFixture<AdvanceContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
