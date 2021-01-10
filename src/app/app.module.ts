import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamionsComponent } from './camions/camions.component';
import { AddCamionComponent } from './add-camion/add-camion.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { UpdateCamionComponent } from './update-camion/update-camion.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CamionsComponent,
    AddCamionComponent,
    BindingComponent,
    UpdateCamionComponent,
    UpdateCamionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
