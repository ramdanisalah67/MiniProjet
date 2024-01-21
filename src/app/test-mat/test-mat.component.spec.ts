import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMatComponent } from './test-mat.component';

describe('TestMatComponent', () => {
  let component: TestMatComponent;
  let fixture: ComponentFixture<TestMatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestMatComponent]
    });
    fixture = TestBed.createComponent(TestMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
