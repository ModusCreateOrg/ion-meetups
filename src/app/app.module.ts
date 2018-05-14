import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutesFallbackService } from './services/routes-fallback.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }
    ]),
    HttpClientModule
  ],
  providers: [
    RoutesFallbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
