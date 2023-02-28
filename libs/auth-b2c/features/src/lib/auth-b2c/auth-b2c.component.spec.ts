import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthB2cComponent } from './auth-b2c.component';

describe('AuthB2cComponent', () => {
  let component: AuthB2cComponent;
  let fixture: ComponentFixture<AuthB2cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthB2cComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthB2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
