import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiadminComponent } from './apiadmin.component';

describe('ApiadminComponent', () => {
  let component: ApiadminComponent;
  let fixture: ComponentFixture<ApiadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
