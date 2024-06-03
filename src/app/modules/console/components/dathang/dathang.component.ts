import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NhanvienService } from '../../services/nhanvien.service';

@Component({
  selector: 'app-dathang',
  templateUrl: './dathang.component.html',
  styleUrls: ['./dathang.component.scss'],
})
export class DathangComponent implements OnInit {
  title = 'Đặt nhân viên';
  item:any = JSON.parse(localStorage.getItem('donhang') || '{}');
  notificationForm: FormGroup;


  constructor(
    private nhanVienService: NhanvienService,
    private toastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    
    this.notificationForm = this.fb.group({
      customerName: ['', [Validators.required]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/(0[3|5|7|8|9])+([0-9]{8})\b/g),
        ],
      ],
      address: ['', Validators.required],
      employeeId: this.item.employeeId,
    });
  }

  ngOnInit(): void {
    console.log(this.item,"hieu test");
  }
  dathang() {}

  onSubmit() {
    if (this.notificationForm.valid) {
      const dataEmployee = {
        ...this.notificationForm.value, 
        ticketType: this.item.ticketType,
      };
    
    this.nhanVienService.postOrder(dataEmployee).subscribe(
      (response) => {
        console.log("response",dataEmployee);
        
            this.toastrService.success(
              'Đặt hàng thành công, vui lòng để ý điên thoại'
            );
            this.router.navigate(['/console/home']);
      },
      (error) => {
        console.error('Error sending message', error);
      }
    );
  }
}
}
