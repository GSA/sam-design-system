import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSampleComponent } from './collapse-sample.component';
import { SdsCollapseModule } from '../../../../../packages/components/src/lib/collapse/collapse.module';
import { CollapseSampleModule } from './collapse-sample.module';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';


describe('CollapseSampleComponent', () => {
  let component: CollapseSampleComponent;
  let fixture: ComponentFixture<CollapseSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseSampleComponent],
      imports: [SdsCollapseModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseSampleComponent);
    component = fixture.componentInstance;
   });

  it('should click button check property is false...', () => {
    let button = fixture.debugElement.query(By.css('.usa-button'));
    button.triggerEventHandler('click', null);
    expect(component.isCollapsedContent).toBe(false);
  });

  it('should add "display none" class to HTML elements with button click', () => {
    const buttonElement = fixture.debugElement.query(By.css('.display-none'));
    expect(buttonElement).toBeFalsy();
  });
});
