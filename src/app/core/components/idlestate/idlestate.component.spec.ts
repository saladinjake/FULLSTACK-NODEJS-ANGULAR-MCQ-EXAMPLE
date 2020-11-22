import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdlestateComponent } from './idlestate.component';

describe('IdlestateComponent', () => {
  let component: IdlestateComponent;
  let fixture: ComponentFixture<IdlestateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdlestateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdlestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
