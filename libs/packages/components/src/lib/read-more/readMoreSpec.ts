/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsReadMoreComponent } from './readMoreComponent ';
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
    selector: 'sds-read-more',
    template: ` <sds-read-more [text]=text></sds-read-more>`
  })
  class TestReadMoreComponenet
  {

  }
describe('SdsReadMoreComponent', () => {
  let component: SdsReadMoreComponent;
  let fixture: ComponentFixture<SdsReadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsReadMoreComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsReadMoreComponent);
    component = fixture.componentInstance;
    component.text = "This is the default text to test read more text with ellipsis";
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add read more text with ellipsis for long text', () => {
    expect(component.ngAfterViewInit());
  });

});
