/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdbcdMoviecardComponent } from './adbcd-moviecard.component';

describe('AdbcdMoviecardComponent', () => {
  let component: AdbcdMoviecardComponent;
  let fixture: ComponentFixture<AdbcdMoviecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdbcdMoviecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdbcdMoviecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
