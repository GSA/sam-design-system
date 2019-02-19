import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { SimpleChanges } from '@angular/core';

// Load the implementations that should be tested
import { SamAlertComponent } from './alert.component';

const defaultConfig = {
  description: 'i-am-a-description',
  title: 'i-am-a-title',
  type: 'success',
};

describe('The Sam Alert component', () => {
  describe('isolated tests', () => {
    let component: SamAlertComponent;
    beforeEach(() => {
      component = new SamAlertComponent();
    });

    it('should toggleContent', () => {
      component.showMoreToggle = false;
      component.toggleContent();
      expect(component.showMoreToggle).toBe(true);
      expect(component.showMoreLinkText).toBe('Hide Details');
      component.toggleContent();
      expect(component.showMoreToggle).toBe(false);
      expect(component.showMoreLinkText).toBe('Show Details');

    });

    it('should trigger dismiss on timer', () => {
      const dismissTime = 100;
      component.dismissTimer = dismissTime;
      component.dismiss.subscribe(() => {
        // should get here
        expect(true).toBe(true);
      });
      component.ngOnInit();
    });
    it('should NOT trigger dismiss on timer if userMustDismiss is true', () => {
      const dismissTime = 100;
      component.userMustDismiss = true;
      component.dismissTimer = dismissTime;
      component.dismiss.subscribe(() => {
        // should not get here
        fail();
      });
      component.ngOnInit();
      setTimeout(() => {
        expect(true).toBe(true);
      }, 300);
    });
    it('should trigger dismiss on method', () => {
      component.dismiss.subscribe(() => {
        expect(true).toBe(true);
      });
      component.closeAlert();
    });
    it('should check if type is defined', () => {
      expect(component.typeNotDefined()).toBe(true);
      component.type = 'notAValidType';
      expect(component.typeNotDefined()).toBe(true);
      component.type = 'success';
      expect(component.typeNotDefined()).toBe(false);
      component.ngOnInit();
      expect(component.selectedType).toBe('usa-alert-success');
    });
  });
  describe('rendered tests', () => {
    let component: SamAlertComponent;
    let fixture: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [SamAlertComponent],
        imports: [RouterTestingModule],
      });

      fixture = TestBed.createComponent(SamAlertComponent);
      component = fixture.componentInstance;
      component.type = defaultConfig.type;
      component.title = defaultConfig.title;
      component.description = defaultConfig.description;
      fixture.detectChanges();

    });

    it('title + description check', () => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(
          fixture.debugElement.query(
            By.css('.usa-alert-heading')
          )
          .nativeElement.textContent.trim()
        )
        .toBe('i-am-a-title');
        expect(
          fixture.debugElement.query(
            By.css('.usa-alert-text')
          )
          .nativeElement.textContent.trim()
        )
        .toBe('i-am-a-description');
      });
    });
    it('type check', () => {
      fixture.detectChanges();
      //fixture.whenStable().then(() => {
        expect(
          fixture.debugElement.query(
            By.css('.usa-alert')
          ).nativeElement.className
        )
        .toContain('usa-alert-success');
    //  });
    });
  });
});
