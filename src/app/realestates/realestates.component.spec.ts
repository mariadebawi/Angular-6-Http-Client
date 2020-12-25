/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RealestatesComponent } from './realestates.component';

describe('RealestatesComponent', () => {
  let component: RealestatesComponent;
  let fixture: ComponentFixture<RealestatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealestatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
