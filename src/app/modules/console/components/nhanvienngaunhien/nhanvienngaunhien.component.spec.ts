import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhanvienngaunhienComponent } from './nhanvienngaunhien.component';

describe('NhanvienngaunhienComponent', () => {
  let component: NhanvienngaunhienComponent;
  let fixture: ComponentFixture<NhanvienngaunhienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhanvienngaunhienComponent]
    });
    fixture = TestBed.createComponent(NhanvienngaunhienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
