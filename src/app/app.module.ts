import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, GroceryListComponent]
})
export class AppModule { }
