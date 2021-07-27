/* tslint:disable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SdsFooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationMode } from '@gsa-sam/components';

import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';
import { FooterLogo } from './model/FooterModel';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SdsFeedbackModule } from '../sds-feedback/sds-feedback.module';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { IconModule, allIcons as sdsAllIcons } from '@gsa-sam/ngx-uswds-icons';

describe('SdsFooterComponent', () => {
  let component: SdsFooterComponent;
  let fixture: ComponentFixture<SdsFooterComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SdsFooterComponent],
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        IconModule,
        SdsAccordionModule,
        SdsFeedbackModule,
        NgxBootstrapIconsModule.pick(Object.assign(allIcons, sdsAllIcons))
      ]
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
});
