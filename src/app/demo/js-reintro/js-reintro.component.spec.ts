import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsReintroComponent } from './js-reintro.component';

describe('JsReintroComponent', () => {
  let component: JsReintroComponent;
  let fixture: ComponentFixture<JsReintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsReintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsReintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
