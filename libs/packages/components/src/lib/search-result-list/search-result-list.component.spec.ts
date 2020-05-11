import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsSearchResultListComponent } from './search-result-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('SdsSearchResultListComponent', () => {
  let component: SdsSearchResultListComponent;
  let fixture: ComponentFixture<SdsSearchResultListComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSearchResultListComponent],
      imports: [FontAwesomeModule, CommonModule]

    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SdsSearchResultListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;

      })
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // List of Items
  it('should display list of items', async(() => {
    component.model = { "results": [
      { title: 'First', id: 1 },
      { title: 'Second', id: 2 },
      { title: 'Third', id: 3 },
      { title: 'Fourth', id: 4 },
      { title: 'Fifth', id: 5, hasNewerData: true }
    ] }

   fixture.detectChanges();

   const testResult = component.model.results[0];
   const testResults = component.model.results;
   expect(testResult).toBeTruthy("Could not find");
   expect(testResults.length).toBeGreaterThan(0);
   expect(testResult.title).toEqual('First');

  }))

  // No matches found
  it('should display no matches found message', async(() => {

  component.model = {
    results: [] = []
  }

  fixture.detectChanges();
  const noResults = component.model.results
  console.log(noResults);
  expect(noResults).toBeTruthy("Not truthy");
  expect(noResults.length).toEqual(0);

  }))

  //Error message
  it('should display an error message', async(() => {
    component.model = {
      error: {
        title: 'Bad Request',
        description: "There was an issue with the search request. If you continue to experience this issue, please contact the <a href='https://www.fsd.gov/'>Federal Service Desk</a>",
        icon: {
          name: 'fa-alert-error',
          library: 'sds',
          size: '6x'
        }
      }
    }

    fixture.detectChanges();
    const errorMessage = component.model.error
    // console.log(errorMessage);
    expect(errorMessage).toBeTruthy('Not Truthy')
    expect(errorMessage.title).toContain('Bad Request');

  }))

  // Default Message

  it('should display a message by default', async(() => {
    component.model = {
      emptySearch: 'nothing'
    }

    fixture.detectChanges();
    const defaultMessage = component.model.emptySearch
    // console.log(defaultMessage);
    expect(defaultMessage).toBeTruthy();
    expect(defaultMessage).toContain('nothing');

  }));


});
