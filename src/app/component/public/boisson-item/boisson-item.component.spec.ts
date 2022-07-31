import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoissonItemComponent } from './boisson-item.component';

describe('BoissonItemComponent', () => {
  let component: BoissonItemComponent;
  let fixture: ComponentFixture<BoissonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoissonItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoissonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
