import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './modules/core/core.module';

const routes: Routes = [
  {
    path: 'console',
    loadChildren: () =>
      import('./modules/console/console.module').then((m) => m.ConsoleModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'console/home',
  },
];

@NgModule({
  imports: [CoreModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
