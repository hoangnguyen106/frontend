import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietnhanvienComponent } from './chitietnhanvien.component';

describe('ChitietnhanvienComponent', () => {
  let component: ChitietnhanvienComponent;
  let fixture: ComponentFixture<ChitietnhanvienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChitietnhanvienComponent]
    });
    fixture = TestBed.createComponent(ChitietnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
