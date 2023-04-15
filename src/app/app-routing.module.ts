import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./core/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'extratos',
    loadChildren: () => import('./core/modules/balances/balances.module').then(m => m.BalancesModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./core/modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
