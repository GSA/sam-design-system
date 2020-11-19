import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsDialogModule, SdsDialogRef, SdsSelectionPanelModule, SDS_DIALOG_DATA } from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';

import { SideToolbarDialogComponent } from './side-toolbar-dialog.component';

describe('SideToolbarDialogComponent', () => {
  let component: SideToolbarDialogComponent;
  let fixture: ComponentFixture<SideToolbarDialogComponent>;
  let dialogSpy;

  beforeEach(async(() => {
    dialogSpy = jasmine.createSpyObj('SdsDialogRef', ['close']);
    TestBed.configureTestingModule({
      imports: [
        SdsFiltersModule, 
        SdsSelectionPanelModule,
        FontAwesomeModule,
        SdsDialogModule,
        RouterTestingModule,
      ],
      declarations: [ SideToolbarDialogComponent ],
      providers: [
        { provide: SdsDialogRef, useValue: dialogSpy },
        {provide: SDS_DIALOG_DATA, useValue: {
          selectionPanelConfig: {},
          filterPanelConfig: {},
        }},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideToolbarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should close dialog on back button click', () => {
    const cancelButton = fixture.debugElement.query(By.css('#cancelButton'));
    cancelButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(dialogSpy.close).toHaveBeenCalledWith();
  });

  it('Should close with selected filters', () => {
    component.onFilterChange([{keyword: 'test'}]);
    const applyButton = fixture.debugElement.query(By.css('#applyButton'));
    applyButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(dialogSpy.close).toHaveBeenCalledWith({
      selectedPanel: undefined,
      selectedFilters: [{keyword: 'test'}]
    });
  })
});
