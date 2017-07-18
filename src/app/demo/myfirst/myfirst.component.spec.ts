import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfirstComponent } from './myfirst.component';

describe('MyfirstComponent', () => {
  let component: MyfirstComponent;
  let fixture: ComponentFixture<MyfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
