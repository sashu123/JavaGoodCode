import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { Injector } from '@angular/core';
import { DataLoader } from './data-loader';
import { OverViewComponent } from './overview/overview.component';

export let InjectorInstance: Injector;
@NgModule({
  declarations: [AppComponent, OverViewComponent, DataLoader],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    InjectorInstance = this.injector;
  }
}
