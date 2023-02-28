import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthB2bComponent } from './auth-b2b.component';

describe('AuthB2bComponent', () => {
  let component: AuthB2bComponent;
  let fixture: ComponentFixture<AuthB2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthB2bComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthB2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
