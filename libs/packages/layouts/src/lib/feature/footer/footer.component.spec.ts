/* tslint:disable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsFooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMode } from '@gsa-sam/components';
import { SdsCollapseModule } from '@gsa-sam/components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterLogo } from './model/FooterModel';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SdsFooterComponent', () => {
  let component: SdsFooterComponent;
  let fixture: ComponentFixture<SdsFooterComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsFooterComponent],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule, 
        SdsCollapseModule, 
        FontAwesomeModule,
        ReactiveFormsModule,
        SdsAccordionModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFooterComponent);
    component = fixture.componentInstance;
    component.model = {
      linkSections: [{ text: 'test link', links: [{mode: NavigationMode.EVENT, text: 'test', route: '/'}] }],
      footerLogo: {} as FooterLogo,
    };
    fixture.detectChanges();
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

  it('Should emit feedback content on submit click', () => {
    component.feedbackModel.setValue('Test Feedback');
    const feedbackSubmitSpy = spyOn(component.feedbackSubmit, 'emit');

    const feedbackSubmitButton = fixture.debugElement.query(By.css('#feedbackSubmit'));
    feedbackSubmitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(feedbackSubmitSpy).toHaveBeenCalledWith('Test Feedback');
  })
});
