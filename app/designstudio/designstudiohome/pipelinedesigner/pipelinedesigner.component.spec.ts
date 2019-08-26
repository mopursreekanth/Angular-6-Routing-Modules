import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinedesignerComponent } from './pipelinedesigner.component';

describe('PipelinedesignerComponent', () => {
  let component: PipelinedesignerComponent;
  let fixture: ComponentFixture<PipelinedesignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelinedesignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelinedesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
