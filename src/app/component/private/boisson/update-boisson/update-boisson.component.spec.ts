import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBoissonComponent } from './update-boisson.component';

describe('UpdateBoissonComponent', () => {
  let component: UpdateBoissonComponent;
  let fixture: ComponentFixture<UpdateBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBoissonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
