import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsCollapseModule } from '@gsa-sam/components';
import { SdsFeedbackComponent } from './sds-feedback.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconModule, allIcons as sdsAllIcons } from '@gsa-sam/ngx-uswds-icons';

describe('SdsFeedbackComponent', () => {
  let component: SdsFeedbackComponent;
  let fixture: ComponentFixture<SdsFeedbackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        SdsCollapseModule,
        IconModule,
        NgxBootstrapIconsModule.pick(Object.assign(allIcons, sdsAllIcons))
      ],
      declarations: [ SdsFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should emit feedback content on submit click', () => {
    component.feedbackModel.setValue('Test Feedback');
    const feedbackSubmitSpy = spyOn(component.feedbackSubmit, 'emit');

    const feedbackSubmitButton = fixture.debugElement.query(By.css('#feedbackSubmit'));
    feedbackSubmitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(feedbackSubmitSpy).toHaveBeenCalledWith('Test Feedback');
  });
});
