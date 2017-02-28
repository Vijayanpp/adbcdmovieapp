/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovienewsComponent } from './movienews.component';

describe('MovienewsComponent', () => {
  let component: MovienewsComponent;
  let fixture: ComponentFixture<MovienewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovienewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovienewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
