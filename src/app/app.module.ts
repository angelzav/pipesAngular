import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
import localeFr from "@angular/common/locales/fr";

// the second parameter 'fr-FR' is optional
registerLocaleData(localeEs);
registerLocaleData(localeFr);

import { AppComponent } from "./app.component";
import { PipePersonal01Pipe } from "./pipes/pipe-personal01.pipe";
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { OcultatextoPipe } from './pipes/ocultatexto.pipe';

@NgModule({
  declarations: [AppComponent, PipePersonal01Pipe, DomseguroPipe, OcultatextoPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
