import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSprintComponent } from './add-sprint.component';

describe('AddSprintComponent', () => {
  let component: AddSprintComponent;
  let fixture: ComponentFixture<AddSprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSprintComponent]
    });
    fixture = TestBed.createComponent(AddSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
