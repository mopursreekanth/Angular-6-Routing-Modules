import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportbuilderComponent } from './reportbuilder.component';

describe('ReportbuilderComponent', () => {
  let component: ReportbuilderComponent;
  let fixture: ComponentFixture<ReportbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
