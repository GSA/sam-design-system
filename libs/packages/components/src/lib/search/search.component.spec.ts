import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SdsSearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ViewportRuler } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';


class TestComponent {
  inputState = {
    initial: { visible: undefined },
    visible: undefined
  };
}

describe('SearchComponent', () => {
  let component: SdsSearchComponent;
  let fixture: ComponentFixture<SdsSearchComponent>;
  let inputEl: any;
  let buttonEl: any;
  let selectEl: any;
  let event: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdsSearchComponent ],
      providers: [FocusMonitor, ViewportRuler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSearchComponent);
    component = fixture.componentInstance;
    component.searchConfiguration = {
      'searchConfiguration': 'none',
      'selectInverse': false,
      'searchBig' : true,
      'default': 'select',
      'options' : [
        {'id': '1', 'option' : 'One'},
        {'id': '2', 'option' : 'Two'},
        {'id': '3', 'option' : 'Three'}
      ]
    }
    fixture.detectChanges();
  });

  it('Should check the functionality for click event', ()=>{
    const e = jasmine.createSpyObj('e', [ 'preventDefault' ]);
    component.handleClick(e);
    expect(e.preventDefault).toHaveBeenCalled();
    expect(component.inputState.visible).toBeTruthy();
    component.setInputVisibleStyles();
  });
  it('Should check the functionality for click event', ()=>{
    component.inputState.visible = true;
    component.inputEl.nativeElement.value = 'GSA';
    let termValue = null;
    const select = fixture.debugElement.query(By.css('.sds-search'));
    console.log(select);
    // component.inputEl.nativeElement.value = true;
    const e = jasmine.createSpyObj('e', [ 'preventDefault' ]);
    component.handleClick(e);
    expect(component.inputEl.nativeElement.value && component.searchConfiguration.searchConfiguration == 'none').toBe(true);
    component.inputEl.nativeElement.value = 'GSA';
    component.term.subscribe( value => component.inputEl.nativeElement.value);
    expect(component.inputEl.nativeElement.value).toBe('GSA');
    component.searchConfiguration.searchConfiguration = 'dropdown';
    // expect(component.searchConfiguration.searchConfiguration).toBe()
  });



  it('Should check the Initial State Visible', () => {
    expect(component.inputState.visible).toBe(component.inputState.initial.visible);
  });

  it('should handle set Input properites ', () => {
    component.setInputVisibleStyles();
    expect(component.inputEl.nativeElement.style.display).toBe('block');
    expect(component.inputEl.nativeElement.style.position).toBe('absolute');
    expect(component.inputState.visible).toBeTruthy();
  });

  it('should handle check for remove Input Visible method ', () => {
    component.removeInputVisibleStyles();
    expect(component.inputEl.nativeElement.style.display).toBe('');
    expect(component.inputEl.nativeElement.style.position).toBe('');
    expect(component.inputEl.nativeElement.style.left).toBe('');
    expect(component.inputEl.nativeElement.style.width).toBe('');
    expect(component.inputState.visible).toBeFalsy();
  });
});
