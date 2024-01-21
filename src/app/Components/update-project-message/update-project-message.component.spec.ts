import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectMessageComponent } from './update-project-message.component';

describe('UpdateProjectMessageComponent', () => {
  let component: UpdateProjectMessageComponent;
  let fixture: ComponentFixture<UpdateProjectMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProjectMessageComponent]
    });
    fixture = TestBed.createComponent(UpdateProjectMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
