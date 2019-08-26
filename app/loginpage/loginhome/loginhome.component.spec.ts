import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginhomeComponent } from './loginhome.component';

describe('LoginhomeComponent', () => {
  let component: LoginhomeComponent;
  let fixture: ComponentFixture<LoginhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
