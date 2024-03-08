import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../core/components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { HuongdanComponent } from './components/huongdan/huongdan.component';
import { GiaveComponent } from './components/giave/giave.component';
import { LienheComponent } from './components/lienhe/lienhe.component';
import { BandoComponent } from './components/bando/bando.component';
import { DanhsachnhanvienComponent } from './components/danhsachnhanvien/danhsachnhanvien.component';
import { ChitietnhanvienComponent } from './components/chitietnhanvien/chitietnhanvien.component';

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
        path: 'huongdan',
        component: HuongdanComponent,
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
];

export const ConsoleRoutes = RouterModule.forChild(routes);
