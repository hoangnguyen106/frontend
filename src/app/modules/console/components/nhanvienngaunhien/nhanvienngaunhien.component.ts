import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../../services/nhanvien.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nhanvienngaunhien',
  templateUrl: './nhanvienngaunhien.component.html',
  styleUrls: ['./nhanvienngaunhien.component.scss'],
})
export class NhanvienngaunhienComponent implements OnInit {
  title = 'Nhân viên ngẫu nhiên';
  keyword = 'Vé chọn ngẫu nhiên';
  selectedTimeService: string = '60 phút';
  selectedQuantity: number = 1;
  addToCart!: FormGroup;

  nhanVienNgauNhien: any;
  constructor(
    private nhanvienService: NhanvienService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadNhanVienNgauNhien();
    // this.addToCart = this.fb.group({
    //   productId: [''],
    //   color: ['', Validators.required],
    //   price: [''],
    //   quantity: ['', Validators.required],
    // });
  }

  loadNhanVienNgauNhien() {
    this.nhanvienService.getNhanVienByKeyword(this.keyword).subscribe((res) => {
      for (let index = 0; index < res.length; index++) {
        this.nhanVienNgauNhien = res[index];
        if (this.selectedTimeService === '60 phút') {
          res[index].priceTicket = 300000;
          res[index].timeService = this.selectedTimeService;
        } else if (this.selectedTimeService === '90 phút') {
          res[index].priceTicket = 400000;
          res[index].timeService = this.selectedTimeService;
        } else if (this.selectedTimeService === '120 phút') {
          res[index].priceTicket = 500000;
          res[index].timeService = this.selectedTimeService;
        }
        console.log(res[0]);

        localStorage.setItem(
          'donhang',
          JSON.stringify({
            employeeCode: res[0].employeeCode,
            timeService: res[0].timeService,
            priceTicket: res[0].priceTicket,
            ticketType: res[0].ticketType,
            count: this.selectedQuantity,
          })
        );
      }
    });
  }
}
