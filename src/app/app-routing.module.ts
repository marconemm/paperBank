import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BalancesComponent } from './components/balances/balances.component';
import { ContatoComponent } from './components/contato/contato.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
