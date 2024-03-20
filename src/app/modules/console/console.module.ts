import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConsoleRoutes } from './console.routing';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ClipboardModule } from 'ngx-clipboard';
import { GiaveComponent } from './components/giave/giave.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { BandoComponent } from './components/bando/bando.component';
import { DanhsachnhanvienComponent } from './components/danhsachnhanvien/danhsachnhanvien.component';
import { ChitietnhanvienComponent } from './components/chitietnhanvien/chitietnhanvien.component';
import { SharedModule } from '../shared/shared.module';
import { ThanhtoanComponent } from './components/thanhtoan/thanhtoan.component';

@NgModule({
  declarations: [
    HomeComponent,
    GiaveComponent,
    LienheComponent,
    BandoComponent,
    DanhsachnhanvienComponent,
    ChitietnhanvienComponent,
    ThanhtoanComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ConsoleRoutes,
    CoreModule,
    NgxImageZoomModule,
    ClipboardModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  providers: [],
})
export class ConsoleModule {}
