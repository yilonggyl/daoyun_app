import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InOutStockPage } from './in-out-stock.page';

describe('InOutStockPage', () => {
  let component: InOutStockPage;
  let fixture: ComponentFixture<InOutStockPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutStockPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutStockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
