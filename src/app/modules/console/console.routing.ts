import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../core/components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { GiaveComponent } from './components/giave/giave.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { BandoComponent } from './components/bando/bando.component';
import { DanhsachnhanvienComponent } from './components/danhsachnhanvien/danhsachnhanvien.component';
import { ChitietnhanvienComponent } from './components/chitietnhanvien/chitietnhanvien.component';
import { NhanvienngaunhienComponent } from './components/nhanvienngaunhien/nhanvienngaunhien.component';
import { DathangComponent } from './components/dathang/dathang.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'giave',
        component: GiaveComponent,
      },
      {
        path: 'lienhe',
        component: LienheComponent,
      },
      {
        path: 'bando',
        component: BandoComponent,
      },
      {
        path: 'nhanvienngaunhien',
        component: NhanvienngaunhienComponent,
      },

      {
        path: 'danhsachnhanvien',
        children: [
          {
            path: '',
            component: DanhsachnhanvienComponent,
          },
          {
            path: ':id',
            component: ChitietnhanvienComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'dathang',
    component: DathangComponent,
  },
];

export const ConsoleRoutes = RouterModule.forChild(routes);
