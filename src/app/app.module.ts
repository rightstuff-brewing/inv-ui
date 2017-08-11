import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CurrentInventoryComponent } from './current-inventory/current-inventory.component';
import { VendorPricingComponent } from './vendor-pricing/vendor-pricing.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentInventoryComponent,
    VendorPricingComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
