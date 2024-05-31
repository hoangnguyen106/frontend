import { Component, OnInit } from '@angular/core';
import { NhanvienService } from '../../services/nhanvien.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  nhanviens: any[] = [];

  constructor(
    private nhanVienService: NhanvienService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadSinglePage();
  }

  loadSinglePage() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.updateNhanVienTime(this.id, { timeService: this.selectedTimeService });
    });
  }

  updateNhanVienTime(id: string, timePayload: { timeService: string }) {
    this.nhanVienService.findByIdAndUpdateNhanVien(id, timePayload).subscribe({
      next: (res) => {
         this.singlePageNhanVien = res;        
        const { employeeCode, timeService, priceTicket, ticketType, count } = this.singlePageNhanVien;
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
      },
    });
  }

  onSubmit() {
    // Implementation for form submission (if needed)
  }
}
