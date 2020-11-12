import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsSelectionPanelComponent } from './selection-panel.component';

describe('SelectionPanelComponent', () => {
  let component: SdsSelectionPanelComponent;
  let fixture: ComponentFixture<SdsSelectionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsSelectionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSelectionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
