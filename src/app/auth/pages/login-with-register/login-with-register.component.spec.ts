import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithRegisterComponent } from './login-with-register.component';

describe('LoginWithRegisterComponent', () => {
  let component: LoginWithRegisterComponent;
  let fixture: ComponentFixture<LoginWithRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWithRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
