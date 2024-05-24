import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../../services/nhanvien.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-danhsachnhanvien',
  templateUrl: './danhsachnhanvien.component.html',
  styleUrls: ['./danhsachnhanvien.component.scss'],
})
export class DanhsachnhanvienComponent implements OnInit {
  title = 'Danh sách nhân viên';
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
