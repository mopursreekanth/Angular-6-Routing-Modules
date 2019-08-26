import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApihomeComponent } from './apihome.component';

describe('ApihomeComponent', () => {
  let component: ApihomeComponent;
  let fixture: ComponentFixture<ApihomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApihomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
