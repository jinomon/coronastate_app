import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoronaComponent } from './corona/corona.component';
import { CoronastateComponent } from './coronastate/coronastate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';


const myroutes=[
  {path:"",component:CoronaComponent},
  {path:"corona",component:CoronastateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CoronaComponent,
    CoronastateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(myroutes),
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
