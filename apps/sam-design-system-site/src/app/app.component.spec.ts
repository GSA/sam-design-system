import { Component as StubComponent, Input } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

@StubComponent({
  selector: 'usa-icon',
  template: '',
  standalone: false,
})
class UsaIconStubComponent {
  @Input() icon = '';
  @Input() size = 'lg';
  @Input() rotate = 0;
  @Input() classes?: string[];
  @Input() skew?: any;
}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, UsaIconStubComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
