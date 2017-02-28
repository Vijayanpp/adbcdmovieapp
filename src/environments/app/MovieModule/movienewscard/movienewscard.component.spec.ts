/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovienewscardComponent } from './movienewscard.component';

describe('MovienewscardComponent', () => {
  let component: MovienewscardComponent;
  let fixture: ComponentFixture<MovienewscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovienewscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovienewscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
