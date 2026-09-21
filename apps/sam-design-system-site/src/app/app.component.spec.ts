import { TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxBootstrapIconsModule, github } from 'ngx-bootstrap-icons';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      // AppComponent's template renders `<usa-icon>`, so the icon modules
      // AppModule provides must be present here too. Karma tolerated their
      // absence (it logged NG0304 to the console but still reported the spec
      // as passing); Vitest surfaces it as a real failure.
      imports: [RouterTestingModule, IconModule, NgxBootstrapIconsModule.pick({ github })],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
