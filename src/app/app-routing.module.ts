import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components:
import { HomeComponent } from './modules/home/home.component';
import { BalancesComponent } from './modules/balances/balances.component';
import { ContatoComponent } from './modules/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'extratos',
    component: BalancesComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
