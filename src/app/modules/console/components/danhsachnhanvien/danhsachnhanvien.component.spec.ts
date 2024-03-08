import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachnhanvienComponent } from './danhsachnhanvien.component';

describe('DanhsachnhanvienComponent', () => {
  let component: DanhsachnhanvienComponent;
  let fixture: ComponentFixture<DanhsachnhanvienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanhsachnhanvienComponent]
    });
    fixture = TestBed.createComponent(DanhsachnhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
