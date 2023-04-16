import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core'; // contém o identificador do locale (configuração regional) atual da aplicação.
import localePt from '@angular/common/locales/pt' //contém informações de localização para a língua portuguesa do Brasil.
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';




 registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide : LOCALE_ID,useValue: 'pt'}
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
