import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalityFormComponent } from './formality-form.component';

describe('FormalityFormComponent', () => {
  let component: FormalityFormComponent;
  let fixture: ComponentFixture<FormalityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
