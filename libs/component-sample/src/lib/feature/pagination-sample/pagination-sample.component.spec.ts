import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSampleComponent } from './pagination-sample.component';
import { PaginationModule } from '../../../../../packages/components/src/lib/pagination/pagination.module';
describe('PaginationSampleComponent', () => {
  let component: PaginationSampleComponent;
  let fixture: ComponentFixture<PaginationSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationSampleComponent],
      imports: [PaginationModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
