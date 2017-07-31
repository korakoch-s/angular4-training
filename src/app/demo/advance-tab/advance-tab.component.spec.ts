import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTabComponent } from './advance-tab.component';

describe('AdvanceTabComponent', () => {
  let component: AdvanceTabComponent;
  let fixture: ComponentFixture<AdvanceTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
