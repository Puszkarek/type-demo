import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { KeyboardComponent } from './components/keyboard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    KeyboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
