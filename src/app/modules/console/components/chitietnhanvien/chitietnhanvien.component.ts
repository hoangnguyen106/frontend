import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../../services/nhanvien.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-chitietnhanvien',
  templateUrl: './chitietnhanvien.component.html',
  styleUrls: ['./chitietnhanvien.component.scss'],
})
export class ChitietnhanvienComponent implements OnInit {
  title = 'Chi tiết nhân viên';
  id: any;
  singlePageNhanVien: any;
  selectedTimeService: string = '60 phút';
  nhanviens: [] = [];

  constructor(
    private nhanVienService: NhanvienService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadSinglePage();
  }

  loadSinglePage() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
    this.nhanVienService.findByIdAndUpdateNhanVien(this.id).subscribe({
      next: (res) => {
        this.singlePageNhanVien = res;
        console.log('singleproduct', res);
        if (this.selectedTimeService === '60 phút') {
          res.priceTicket = 400000;
          res.timeService = this.selectedTimeService;
        } else if (this.selectedTimeService === '90 phút') {
          res.priceTicket = 450000;
          res.timeService = this.selectedTimeService;
        } else if (this.selectedTimeService === '120 phút') {
          res.priceTicket = 550000;
          res.timeService = this.selectedTimeService;
        }

        localStorage.setItem(
          'donhang',
          JSON.stringify({
            employeeCode: res.employeeCode,
            timeService: res.timeService,
            priceTicket: res.priceTicket,
            count: res.count,
            ticketType: res.ticketType,
          })
        );

        // this.addToCart.patchValue({
        //   productId: this.singlePageProduct._id,
        //   price: this.singlePageProduct.price,
        // });
      },
    });
  }

  onSubmit() {}
}
