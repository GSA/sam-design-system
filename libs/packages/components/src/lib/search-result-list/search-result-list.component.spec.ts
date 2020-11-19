import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsSearchResultListComponent } from './search-result-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { SpyLocation } from '@angular/common/testing';
import { Location } from '@angular/common';
import { SdsIconModule } from '../icon/icon.module';
describe('SdsSearchResultListComponent', () => {
  let component: SdsSearchResultListComponent;
  let fixture: ComponentFixture<SdsSearchResultListComponent>;
  let el: DebugElement;
  let location: SpyLocation;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSearchResultListComponent],
      imports: [FontAwesomeModule, CommonModule, SdsIconModule],
      providers: [{ provide: Location, useClass: SpyLocation }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSearchResultListComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display list of items', async(() => {
    component.model = {
      results: [
        { title: 'First', id: 1 },
        { title: 'Second', id: 2 },
        { title: 'Third', id: 3 },
        { title: 'Fourth', id: 4 },
        { title: 'Fifth', id: 5 }
      ]
    };
    fixture.detectChanges();
    const testResult = component.updateModel.results[0];
    const testResults = component.updateModel.results;
    expect(testResult).toBeTruthy('Could not find');
    expect(testResults.length).toBeGreaterThan(0);
    expect(testResult.title).toEqual('First');
  }));

  it('should convert model array to searchModel object', async(() => {
    const items = [
      { title: 'First', id: 1 },
      { title: 'Second', id: 2 },
      { title: 'Third', id: 3 },
      { title: 'Fourth', id: 4 },
      { title: 'Fifth', id: 5, hasNewerData: true }
    ];
    component.model = items;
    fixture.detectChanges();

    expect(component.updateModel.results.length).toBe(items.length);
  }));

  it('should go back to previous page on go back button click', () => {
    component.model = [];
    spyOn(location, 'back');
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });
});
