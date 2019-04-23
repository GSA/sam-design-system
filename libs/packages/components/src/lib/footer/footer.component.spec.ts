/* tslint:disable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SdsFooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';



describe('SdsFooterComponent', () => {
  let component: SdsFooterComponent;
  let fixture: ComponentFixture<SdsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SdsFooterComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdsFooterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

