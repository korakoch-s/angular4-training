import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceChildComponent } from './advance-child.component';

describe('AdvanceChildComponent', () => {
  let component: AdvanceChildComponent;
  let fixture: ComponentFixture<AdvanceChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
