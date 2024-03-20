import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './components/product-card/product-card.component';

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductCardComponent, BreadCrumbComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductCardComponent, BreadCrumbComponent],
})
export class SharedModule {}
