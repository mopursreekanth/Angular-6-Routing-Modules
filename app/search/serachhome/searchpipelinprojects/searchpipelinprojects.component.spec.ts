import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpipelinprojectsComponent } from './searchpipelinprojects.component';

describe('SearchpipelinprojectsComponent', () => {
  let component: SearchpipelinprojectsComponent;
  let fixture: ComponentFixture<SearchpipelinprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpipelinprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpipelinprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
