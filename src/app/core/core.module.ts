import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { HufflepuffComponent } from './components/houses/hufflepuff/hufflepuff.component';
import { RevenclawComponent } from './components/houses/revenclaw/revenclaw.component';
import { GryffindorComponent } from './components/houses/gryffindor/gryffindor.component';
import { SlytherinComponent } from './components/houses/slytherin/slytherin.component';
import { StudentsComponent } from './components/students/students.component';
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './components/register/register.component'
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    TeachersComponent,
    HufflepuffComponent,
    RevenclawComponent,
    GryffindorComponent,
    SlytherinComponent,
    StudentsComponent,
    RegisterComponent,
    UsuarioListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
  ],
})
export class CoreModule {}
