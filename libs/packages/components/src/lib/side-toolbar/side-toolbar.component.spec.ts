import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SdsDialogModule, SdsDialogService } from '@gsa-sam/components';

import { SdsSideToolbarComponent } from './side-toolbar.component';

describe('SideToolbarComponent', () => {
  let component: SdsSideToolbarComponent;
  let fixture: ComponentFixture<SdsSideToolbarComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SdsDialogModule],
        declarations: [SdsSideToolbarComponent],
        providers: [SdsDialogService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSideToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display advanced search button when mobile view is enabled', () => {
    let responsiveViewButton = fixture.debugElement.query(
      By.css('#responsiveViewButton')
    );
    expect(responsiveViewButton).toBeNull();

    component.isResponsiveView = true;
    fixture.detectChanges();

    responsiveViewButton = fixture.debugElement.query(
      By.css('#responsiveViewButton')
    );
    expect(responsiveViewButton).toBeDefined();
  });
});
