import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { BalancesComponent } from './balances.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingComponent } from '../../components/loading/loading.component';

//Pipes:
import { DateTimePipe } from '../../pipes/date-time.pipe';
import { DecimalsPipe } from '../../pipes/decimals.pipe';
import { BalancesRoutingModule } from './balances-routing.module';



@NgModule({
  declarations: [
    BalancesComponent,
    LoadingComponent,
    DateTimePipe,
    DecimalsPipe],
  imports: [
    CommonModule,
    BalancesRoutingModule,
    FontAwesomeModule
  ]
})
export class BalancesModule { }
