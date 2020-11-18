import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsDialogModule, SdsDialogRef, SdsSelectionPanelModule, SDS_DIALOG_DATA } from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';

import { SideToolbarDialogComponent } from './side-toolbar-dialog.component';

describe('SideToolbarDialogComponent', () => {
  let component: SideToolbarDialogComponent;
  let fixture: ComponentFixture<SideToolbarDialogComponent>;

  beforeEach(async(() => {
    const dialogSpy = jasmine.createSpyObj('SdsDialogRef', ['close']);

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
});
