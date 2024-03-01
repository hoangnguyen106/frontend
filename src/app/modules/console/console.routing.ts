import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../core/components/main/main.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

export const ConsoleRoutes = RouterModule.forChild(routes);
