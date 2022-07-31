import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeListComponent } from './cofe-list.component';

describe('CofeListComponent', () => {
  let component: CofeListComponent;
  let fixture: ComponentFixture<CofeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
