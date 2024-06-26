import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../../services/nhanvien.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nhanvienngaunhien',
  templateUrl: './nhanvienngaunhien.component.html',
  styleUrls: ['./nhanvienngaunhien.component.scss'],
})
export class NhanvienngaunhienComponent implements OnInit {
  title = 'Nhân viên ngẫu nhiên';
  keyword = 'Vé chọn ngẫu nhiên';
  selectedTimeService: string = '60 phút';
  count: any = 1;
  addToCart!: FormGroup;
  key: any = 'RAMDOMTICKETS';
  nhanVienNgauNhien: any;

  constructor(
    private nhanvienService: NhanvienService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadNhanVienNgauNhien();
    // Uncomment and use if necessary for form handling
    // this.addToCart = this.fb.group({
    //   productId: [''],
    //   color: ['', Validators.required],
    //   price: [''],
    //   quantity: ['', Validators.required],
    // });
  }

  loadNhanVienNgauNhien() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.updateNhanVienTime(this.key, { timeService: this.selectedTimeService, count: this.count });
    });
  }

  updateNhanVienTime(key: string, timePayload: { timeService: string, count: any }) {
    this.nhanvienService.findByIdAndUpdateRandomNhanVien(key, timePayload).subscribe((res: any) => {
      this.nhanVienNgauNhien = res;
      const { employeeCode, timeService, priceTicket, ticketType, count } = res;
      const dataTypeTickets:any = {
        "RAMDOMTICKETS": "VÉ NGẪU NHIÊN",
        "EMPLOYEETICKETS": "VÉ CHỌN NHÂN VIÊN"
      }
      localStorage.setItem(
        'donhang',
        JSON.stringify({
          employeeCode,
          timeService,
          priceTicket,
          typeTicket:dataTypeTickets[ticketType],
          ticketType,
          count,
          employeeId: res._id
        })
      );
    });
  }
}
