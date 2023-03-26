import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { ExperienciaAptitudesComponent } from './componentes/experiencia-aptitudes/experiencia-aptitudes.component';
import { FooterComponent } from './componentes/footer/footer.component';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    EstudiosComponent,
    ExperienciaAptitudesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
