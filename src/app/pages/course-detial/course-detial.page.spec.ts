import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetialPage } from './course-detial.page';

describe('CourseDetialPage', () => {
  let component: CourseDetialPage;
  let fixture: ComponentFixture<CourseDetialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDetialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
