import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorMenteeSetupComponent } from './mentor-mentee-setup.component';

describe('MentorMenteeSetupComponent', () => {
  let component: MentorMenteeSetupComponent;
  let fixture: ComponentFixture<MentorMenteeSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorMenteeSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorMenteeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
