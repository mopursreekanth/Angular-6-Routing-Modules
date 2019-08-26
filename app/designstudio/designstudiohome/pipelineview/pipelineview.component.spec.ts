import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineviewComponent } from './pipelineview.component';

describe('PipelineviewComponent', () => {
  let component: PipelineviewComponent;
  let fixture: ComponentFixture<PipelineviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
