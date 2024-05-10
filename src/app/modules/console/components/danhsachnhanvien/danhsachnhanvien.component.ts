import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../../services/nhanvien.service';

@Component({
  selector: 'app-danhsachnhanvien',
  templateUrl: './danhsachnhanvien.component.html',
  styleUrls: ['./danhsachnhanvien.component.scss'],
})
export class DanhsachnhanvienComponent implements OnInit {
  nhanvien: [] = [];

  constructor(private nhanvienService: NhanvienService) {}

  ngOnInit(): void {
    this.loadNhanVien();
  }

  loadNhanVien() {
    this.nhanvienService.getAllNhanVien().subscribe((res) => {
      this.nhanvien = res;
      console.log('res =====>', this.nhanvien);
    });
  }
}
