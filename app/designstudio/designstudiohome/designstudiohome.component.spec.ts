import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignstudiohomeComponent } from './designstudiohome.component';

describe('DesignstudiohomeComponent', () => {
  let component: DesignstudiohomeComponent;
  let fixture: ComponentFixture<DesignstudiohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignstudiohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignstudiohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
