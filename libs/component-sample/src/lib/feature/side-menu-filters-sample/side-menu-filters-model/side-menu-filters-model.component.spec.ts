import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuFiltersModelComponent } from './side-menu-filters-model.component';

describe('SideMenuFiltersModelComponent', () => {
  let component: SideMenuFiltersModelComponent;
  let fixture: ComponentFixture<SideMenuFiltersModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuFiltersModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuFiltersModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
