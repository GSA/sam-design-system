import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdsIconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: SdsIconComponent;
  let fixture: ComponentFixture<SdsIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
