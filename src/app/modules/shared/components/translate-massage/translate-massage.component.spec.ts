import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateMassageComponent } from './translate-massage.component';

describe('TranslateMassageComponent', () => {
  let component: TranslateMassageComponent;
  let fixture: ComponentFixture<TranslateMassageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslateMassageComponent]
    });
    fixture = TestBed.createComponent(TranslateMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
