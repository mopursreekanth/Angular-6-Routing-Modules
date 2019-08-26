import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcroleComponent } from './searcrole.component';

describe('SearcroleComponent', () => {
  let component: SearcroleComponent;
  let fixture: ComponentFixture<SearcroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
