import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionmetricsComponent } from './transactionmetrics.component';

describe('TransactionmetricsComponent', () => {
  let component: TransactionmetricsComponent;
  let fixture: ComponentFixture<TransactionmetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionmetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionmetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
