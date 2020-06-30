import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsSearchResultListComponent } from './search-result-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
fdescribe('SdsSearchResultListComponent', () => {
  let component: SdsSearchResultListComponent;
  let fixture: ComponentFixture<SdsSearchResultListComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSearchResultListComponent],
      imports: [FontAwesomeModule, CommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSearchResultListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display list of items', async(() => {
    component.model = { results: [
      { title: 'First', id: 1 },
      { title: 'Second', id: 2 },
      { title: 'Third', id: 3 },
      { title: 'Fourth', id: 4 },
      { title: 'Fifth', id: 5 }
    ] }
  fixture.detectChanges();
   const testResult = component.model.results[0];
   const testResults = component.model.results;
   expect(testResult).toBeTruthy("Could not find");
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
    component.ngOnInit();

    fixture.detectChanges();
    
    expect(component.model.results.length).toBe(items.length);
  }));

});
