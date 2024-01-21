import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSprintToProjectComponent } from './add-sprint-to-project.component';

describe('AddSprintToProjectComponent', () => {
  let component: AddSprintToProjectComponent;
  let fixture: ComponentFixture<AddSprintToProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSprintToProjectComponent]
    });
    fixture = TestBed.createComponent(AddSprintToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
