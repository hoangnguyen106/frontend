import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectComponent } from './button-select.component';

describe('ButtonSelectComponent', () => {
  let component: ButtonSelectComponent;
  let fixture: ComponentFixture<ButtonSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSelectComponent]
    });
    fixture = TestBed.createComponent(ButtonSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
