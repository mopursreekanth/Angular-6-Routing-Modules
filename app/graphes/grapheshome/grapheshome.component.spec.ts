import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheshomeComponent } from './grapheshome.component';

describe('GrapheshomeComponent', () => {
  let component: GrapheshomeComponent;
  let fixture: ComponentFixture<GrapheshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
