import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailsDetailsComponent } from './user-emails-details.component';

describe('UserEmailsDetailsComponent', () => {
  let component: UserEmailsDetailsComponent;
  let fixture: ComponentFixture<UserEmailsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmailsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEmailsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
