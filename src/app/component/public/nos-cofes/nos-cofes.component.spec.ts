import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosCofesComponent } from './nos-cofes.component';

describe('NosCofesComponent', () => {
  let component: NosCofesComponent;
  let fixture: ComponentFixture<NosCofesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosCofesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosCofesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
