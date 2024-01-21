import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSprintMessageComponent } from './add-sprint-message.component';

describe('AddSprintMessageComponent', () => {
  let component: AddSprintMessageComponent;
  let fixture: ComponentFixture<AddSprintMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSprintMessageComponent]
    });
    fixture = TestBed.createComponent(AddSprintMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
