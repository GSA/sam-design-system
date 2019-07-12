import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutocompleteSampleComponent } from './autocomplete-sample.component';
import { SdsFooterModule } from '../../../../../packages/components/src/lib/autocomplete/autocomplete.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AutocompleteSampleComponent', () => {
  let component: AutocompleteSampleComponent;
  let fixture: ComponentFixture<AutocompleteSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteSampleComponent],
      imports: [SdsFooterModule, RouterTestingModule, FontAwesomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
