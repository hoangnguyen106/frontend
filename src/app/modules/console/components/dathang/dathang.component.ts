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
  item = JSON.parse(localStorage.getItem('donhang') || '{}');
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
      priceTicket: this.item.priceTicket,
      timeService: this.item.timeService,
      employeeCode: this.item.employeeCode,
      ticketType: this.item.ticketType,
      count: this.item.count,
      picture: [''],
    });
  }

  ngOnInit(): void {
    console.log(this.item);
  }
  dathang() {}

  onSubmit() {
    const dataEmployee = {
      toObject: () => this.notificationForm.value,
      ticketType: this.item.ticketType,
    };

    this.nhanVienService.sendNotification(dataEmployee).subscribe(
      (response) => {
        this.nhanVienService
          .postOrder(this.notificationForm.value)
          .subscribe((res) => {
            this.toastrService.success(
              'Đặt hàng thành công, vui lòng để ý điên thoại'
            );
            this.router.navigate(['/console/home']);
            console.log(res);
          }); 
      },
      (error) => {
        console.error('Error sending message', error);
      }
    );
  }
}
