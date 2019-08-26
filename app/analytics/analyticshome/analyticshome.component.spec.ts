import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticshomeComponent } from './analyticshome.component';

describe('AnalyticshomeComponent', () => {
  let component: AnalyticshomeComponent;
  let fixture: ComponentFixture<AnalyticshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
