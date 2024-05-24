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
  private BOT_TOKEN = '7066531105:AAHKEd7UaVbBcbfssTyQpMHA5fwb03E3dWI';
  private BASE_URL = `https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`;
  private CHAT_ID = '-4243555077';
  item = JSON.parse(localStorage.getItem('donhang') || '{}');
  notificationForm: FormGroup;

  constructor(
    private nhanVienService: NhanvienService,
    private toastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.notificationForm = this.fb.group({
      customerName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      priceTicket: this.item.priceTicket,
      timeService: this.item.timeService,
      employeeCode: this.item.employeeCode,
      ticketType: this.item.ticketType,
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
      ticketType: 'Vé chọn nhân viên',
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
