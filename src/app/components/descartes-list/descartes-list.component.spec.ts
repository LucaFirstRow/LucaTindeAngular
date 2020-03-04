import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescartesListComponent } from './descartes-list.component';

describe('DescartesListComponent', () => {
  let component: DescartesListComponent;
  let fixture: ComponentFixture<DescartesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescartesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescartesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
