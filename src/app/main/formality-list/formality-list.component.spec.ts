import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalityListComponent } from './formality-list.component';

describe('FormalityListComponent', () => {
  let component: FormalityListComponent;
  let fixture: ComponentFixture<FormalityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalityListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
