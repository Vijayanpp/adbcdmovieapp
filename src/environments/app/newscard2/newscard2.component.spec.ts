/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Newscard2Component } from './newscard2.component';

describe('Newscard2Component', () => {
  let component: Newscard2Component;
  let fixture: ComponentFixture<Newscard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newscard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newscard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
