// import { LoadingInterceptor } from './interceptors/loading.interceptor';

//Modules:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//Pipes:
import { DateTimePipe } from './core/pipes/date-time.pipe';
import { DecimalsPipe } from './core/pipes/decimals.pipe';

//Components:
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { BalancesComponent } from './modules/balances/balances.component';
import { ContatoComponent } from './modules/contact/contact.component';
import { LoadingComponent } from './core/components/loading/loading.component';
import { LoadingInterceptor } from './utils/interceptors/loading.interceptor';

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
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true,
      timeOut: 5000,
    }), // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }, //provide the loading interceptor
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
