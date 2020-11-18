import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SdsDialogModule, SdsDialogService, SdsSelectionPanelModule } from '@gsa-sam/components';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { SideToolbarDialogModule } from '../side-toolbar-dialog/side-toolbar-dialog.module';

import { SideToolbarComponent } from './side-toolbar.component';

describe('SideToolbarComponent', () => {
  let component: SideToolbarComponent;
  let fixture: ComponentFixture<SideToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SdsFiltersModule, 
        SdsSelectionPanelModule,
        SdsDialogModule,
        SideToolbarDialogModule,
        RouterTestingModule,
      ],
      declarations: [ SideToolbarComponent ],
      providers: [
        SdsDialogService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
