import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachhomeComponent } from './serachhome.component';

describe('SerachhomeComponent', () => {
  let component: SerachhomeComponent;
  let fixture: ComponentFixture<SerachhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerachhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerachhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
