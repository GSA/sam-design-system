/* tslint:disable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SdsFooter } from './footer';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMode } from '@gsa-sam/components/core';


describe('SdsFooter', () => {
  let component: SdsFooter;
  let fixture: ComponentFixture<SdsFooter>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsFooter],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFooter);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('event click', () => {
    let navItem = { mode: NavigationMode.EVENT, text: 'test', route: '/' };
    spyOn(component.linkEvent, 'emit');
    component.linkClickEvent(navItem);
    expect(component.linkEvent.emit).toHaveBeenCalledWith(navItem);
  });
});

