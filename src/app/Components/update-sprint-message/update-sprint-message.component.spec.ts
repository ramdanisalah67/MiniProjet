import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSprintMessageComponent } from './update-sprint-message.component';

describe('UpdateSprintMessageComponent', () => {
  let component: UpdateSprintMessageComponent;
  let fixture: ComponentFixture<UpdateSprintMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSprintMessageComponent]
    });
    fixture = TestBed.createComponent(UpdateSprintMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
