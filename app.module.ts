import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {TodosComponent} from './todos/todos.component';
import {TodosService} from './todos.service';
// import { AboutComponent} from './about/about.component';
// import {HomeComponent} from './home/home.component';
// import {TypesComponent} from './types/types.component';
// import { RouterModule, Routes } from '@angular/router';


 /* const Approutes: Routes = [
   {path: 'home', component: HomeComponent},
   { path : 'about', component : AboutComponent},
   {path : 'types', component : TypesComponent},
   {path: '', component: HomeComponent}
 ];*/
@NgModule({
  declarations: [
    AppComponent, TodosComponent// AboutComponent, HomeComponent, TypesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule
    // RouterModule.forRoot( Approutes )
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
