import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCofeComponent } from './add-cofe.component';

describe('AddCofeComponent', () => {
  let component: AddCofeComponent;
  let fixture: ComponentFixture<AddCofeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCofeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCofeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
