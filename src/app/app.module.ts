import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CompletedTaskComponent } from './completed-task/completed-task.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskComponent } from './task/task.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { TaskServiceService } from './task-service.service';
import { CheckboxPopulateComponent } from './checkbox-populate/checkbox-populate.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: MenuComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'mainpage', component: MainComponent },
  { path: 'taskpage', component: TaskComponent },
  { path: 'addtaskpage', component: AddTaskComponent },
  { path: 'completedtaskpage', component: CompletedTaskComponent },
  { path: 'checkboxPopulate', component: CheckboxPopulateComponent },
  { path: '**', component: NotFoundComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    CompletedTaskComponent,
    MainComponent,
    NotFoundComponent,
    TaskComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    CheckboxPopulateComponent

  ],
  imports: [
    BrowserModule, HttpModule, CommonModule, FormsModule, RouterModule.forRoot(appRoutes, { useHash: true } )
  ],
  providers: [ TaskServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
