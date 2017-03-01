/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialognewsComponent } from './dialognews.component';

describe('DialognewsComponent', () => {
  let component: DialognewsComponent;
  let fixture: ComponentFixture<DialognewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialognewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialognewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
