import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlacesComponent } from './Components/places/places.component';
import { ViewPlaceComponent } from './Components/view-place/view-place.component';
import { AddNewComponent } from './Components/add-new/add-new.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './Components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    ViewPlaceComponent,
    AddNewComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
