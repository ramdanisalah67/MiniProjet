import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintsInfoComponent } from './sprints-info.component';

describe('SprintsInfoComponent', () => {
  let component: SprintsInfoComponent;
  let fixture: ComponentFixture<SprintsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SprintsInfoComponent]
    });
    fixture = TestBed.createComponent(SprintsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
