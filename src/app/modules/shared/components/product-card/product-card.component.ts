import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/console/models/product';
import { NhanvienService } from 'src/app/modules/console/services/nhanvien.service';
// import { ProductService } from 'src/app/modules/console/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() nhanviens: any;

  constructor(private nhanvienService: NhanvienService) {}
  ngOnInit(): void {
    console.log('nhan vien: ', this.nhanviens);
  }
}
