import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeItemComponent } from './cofe-item.component';

describe('CofeItemComponent', () => {
  let component: CofeItemComponent;
  let fixture: ComponentFixture<CofeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
