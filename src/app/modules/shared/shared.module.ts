import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './components/product-card/product-card.component';

import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { ButtonSelectComponent } from './components/button-select/button-select.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateMassageComponent } from './components/translate-massage/translate-massage.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    BreadCrumbComponent,
    ButtonSelectComponent,
    TranslateMassageComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule,TranslateModule],
  exports: [
    ProductCardComponent,
    BreadCrumbComponent,
    ButtonSelectComponent,
    TranslateModule,
    TranslateMassageComponent
  ],
})
export class SharedModule {}
