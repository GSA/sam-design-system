/* tslint:disable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SDSAutocompleteComponent } from './autocomplete.component';

import { FormsModule } from '@angular/forms';

import { By } from '@angular/platform-browser';
import 'rxjs/add/observable/of';



describe('SDSAutocompleteComponent', () => {
  let component: SDSAutocompleteComponent;
  let fixture: ComponentFixture<SDSAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SDSAutocompleteComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SDSAutocompleteComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});

