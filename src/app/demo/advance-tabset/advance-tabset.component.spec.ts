import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTabsetComponent } from './advance-tabset.component';

describe('AdvanceTabsetComponent', () => {
  let component: AdvanceTabsetComponent;
  let fixture: ComponentFixture<AdvanceTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
