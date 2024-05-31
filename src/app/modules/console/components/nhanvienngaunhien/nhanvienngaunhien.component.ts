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
  selectedQuantity: number = 1;
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
      this.updateNhanVienTime(this.key, { timeService: this.selectedTimeService });
    });
  }

  updateNhanVienTime(key: string, timePayload: { timeService: string }) {
    this.nhanvienService.findByIdAndUpdateRandomNhanVien(key, timePayload).subscribe((res: any) => {
      this.nhanVienNgauNhien = res;
      const { employeeCode, timeService, priceTicket, ticketType, count } = res;
      localStorage.setItem(
        'donhang',
        JSON.stringify({
          employeeCode,
          timeService,
          priceTicket,
          ticketType,
          count,
        })
      );
    });
  }
}
