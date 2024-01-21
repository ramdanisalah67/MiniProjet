import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectMessageComponent } from './add-project-message.component';

describe('AddProjectMessageComponent', () => {
  let component: AddProjectMessageComponent;
  let fixture: ComponentFixture<AddProjectMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProjectMessageComponent]
    });
    fixture = TestBed.createComponent(AddProjectMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
