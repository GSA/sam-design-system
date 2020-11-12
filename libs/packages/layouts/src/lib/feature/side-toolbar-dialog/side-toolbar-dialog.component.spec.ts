import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideToolbarDialogComponent } from './side-toolbar-dialog.component';

describe('SideToolbarDialogComponent', () => {
  let component: SideToolbarDialogComponent;
  let fixture: ComponentFixture<SideToolbarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideToolbarDialogComponent ]
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
