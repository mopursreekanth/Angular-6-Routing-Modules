import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardsComponent } from './dash-boards.component';

describe('DashBoardsComponent', () => {
  let component: DashBoardsComponent;
  let fixture: ComponentFixture<DashBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
