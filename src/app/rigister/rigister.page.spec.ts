import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RigisterPage } from './rigister.page';

describe('RigisterPage', () => {
  let component: RigisterPage;
  let fixture: ComponentFixture<RigisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RigisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RigisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
