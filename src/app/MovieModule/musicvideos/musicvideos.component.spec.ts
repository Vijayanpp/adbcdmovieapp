/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicvideosComponent } from './musicvideos.component';

describe('MusicvideosComponent', () => {
  let component: MusicvideosComponent;
  let fixture: ComponentFixture<MusicvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
