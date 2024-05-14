import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dathang',
  templateUrl: './dathang.component.html',
  styleUrls: ['./dathang.component.scss'],
})
export class DathangComponent {
  title = 'Đặt nhân viên';
  constructor(private toastrService: ToastrService, private router: Router) {}

  dathang() {
    this.toastrService.success('Đặt hàng thành công, vui lòng để ý điên thoại');
    this.router.navigate(['/console/home']);
  }
}
