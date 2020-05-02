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

fdescribe('SearchComponent', () => {
  let component: SdsSearchComponent;
  let fixture: ComponentFixture<SdsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsSearchComponent],
      providers: [FocusMonitor, ViewportRuler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsSearchComponent);
    component = fixture.componentInstance;
    component.searchSettings.size = 'large';
    // component.model.searchText ='test';
    // component.model.searchCategory ='30';
    fixture.detectChanges();
  });

  it('should be dropdown', () => {
    //  const e = jasmine.createSpyObj('e', [ 'preventDefault' ]);

    component.inputEl.nativeElement.value = 'test';
    // component.selectEl.nativeElement.value = '30';
    component.searchSettings.dropdown.options = [
      { label: '30 Days', value: '30' },
      { label: '60 Days', value: '60' },
      { label: '90 Days', value: '90' }
    ];

    expect(component.inputEl.nativeElement.value).toBe('test');
  });

  it('should implement controlvalueaccessor with default values', () => {
    component.registerOnChange(_ => undefined);
    component.registerOnTouched(() => undefined);
    component.writeValue({ searchText: 'aaa', searchCategory: '30' });
    expect(component.model.searchText).toBe('aaa');
  });

  it('should implement controlvalueaccessor with empty', () => {
    component.model = {};
    component.registerOnChange(_ => undefined);
    component.registerOnTouched(() => undefined);
    component.writeValue(component.model);
    expect(component.model.searchText).toBe(undefined);
  });

  it('Should update the model value on click event', () => {
    const e = jasmine.createSpyObj('e', ['preventDefault']);
    component.inputEl.nativeElement.value = 'test';
    component.handleClick(e);
    expect(e.preventDefault).toHaveBeenCalled();
    expect(component.model.searchText).toBe('test');
  });

  it('Should check the Initial State Visible', () => {
    expect(component.inputState.visible).toBe(
      component.inputState.initial.visible
    );
  });

  it('should accept inputs and assign properties', () => {
    component.setInputVisibleStyles();
    expect(component.inputEl.nativeElement.style.display).toBe('block');
    expect(component.inputEl.nativeElement.style.position).toBe('absolute');
    expect(component.inputState.visible).toBeTruthy();
  });

  it('should check for remove Input Visible', () => {
    component.removeInputVisibleStyles();
    expect(component.inputEl.nativeElement.style.display).toBe('');
    expect(component.inputEl.nativeElement.style.position).toBe('');
    expect(component.inputEl.nativeElement.style.left).toBe('');
    expect(component.inputEl.nativeElement.style.width).toBe('');
    expect(component.inputState.visible).toBeFalsy();
  });

  it('Should trigger focus event', () => {
    const e = null;
    component.inputState.initial.visible = true;
    component.focusChange(e);
    fixture.detectChanges();
    expect(component.inputEl.nativeElement.style.display).toBe('');
    expect(component.inputEl.nativeElement.style.position).toBe('');
    expect(component.inputEl.nativeElement.style.left).toBe('');
    expect(component.inputEl.nativeElement.style.width).toBe('');
    expect(component.inputState.visible).toBeTruthy();
  });
  it('Should visible false event', () => {
    const e = jasmine.createSpyObj('e', ['preventDefault']);
    component.inputState.visible = false;
    component.handleClick(e);
    fixture.detectChanges();
    expect(component.inputEl.nativeElement.style.display).toBe('block');
    expect(component.inputEl.nativeElement.style.position).toBe('absolute');
    expect(component.inputState.visible).toBeTruthy();
  });
});
