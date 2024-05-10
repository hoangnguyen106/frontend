import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './components/product-card/product-card.component';

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { ButtonSelectComponent } from './components/button-select/button-select.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    BreadCrumbComponent,
    ButtonSelectComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ProductCardComponent, BreadCrumbComponent, ButtonSelectComponent],
})
export class SharedModule {}
