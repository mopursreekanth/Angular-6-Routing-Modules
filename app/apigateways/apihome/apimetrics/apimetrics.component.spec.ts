import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApimetricsComponent } from './apimetrics.component';

describe('ApimetricsComponent', () => {
  let component: ApimetricsComponent;
  let fixture: ComponentFixture<ApimetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApimetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApimetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
