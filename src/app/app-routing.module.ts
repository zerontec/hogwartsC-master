import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListComponent } from './core/components/usuario-list/usuario-list.component';
import { RegisterComponent } from './core/components/register/register.component';
import { TeachersComponent } from './core/components/teachers/teachers.component';
import { StudentsComponent } from './core/components/students/students.component';
import { SlytherinComponent } from './core/components/houses/slytherin/slytherin.component';
import { HufflepuffComponent } from './core/components/houses/hufflepuff/hufflepuff.component';
import { GryffindorComponent } from './core/components/houses/gryffindor/gryffindor.component';
import { HomeComponent } from './core/components/home/home.component';

import { RevenclawComponent } from './core/components/houses/revenclaw/revenclaw.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gryffindor', component: GryffindorComponent },
  { path: 'slytherin', component: SlytherinComponent },
  { path: 'hufflepuff', component: HufflepuffComponent },
  { path: 'ravenclaw', component: RevenclawComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'new-students', component: UsuarioListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
