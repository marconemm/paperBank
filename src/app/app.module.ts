import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BalancesComponent } from './components/balances/balances.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateTimePipe } from './pipes/date-time.pipe';
import { ContatoComponent } from './components/contato/contato.component';
import { HttpClientModule } from '@angular/common/http';
import { DecimalsPipe } from './pipes/decimals.pipe';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BalancesComponent,
    ContatoComponent,
    DateTimePipe,
    DecimalsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
