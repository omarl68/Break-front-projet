import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCofeComponent } from './update-cofe.component';

describe('UpdateCofeComponent', () => {
  let component: UpdateCofeComponent;
  let fixture: ComponentFixture<UpdateCofeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCofeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
