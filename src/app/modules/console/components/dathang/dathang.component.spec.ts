import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DathangComponent } from './dathang.component';

describe('DathangComponent', () => {
  let component: DathangComponent;
  let fixture: ComponentFixture<DathangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DathangComponent]
    });
    fixture = TestBed.createComponent(DathangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
