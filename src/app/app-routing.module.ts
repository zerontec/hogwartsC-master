import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./core/components/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: `gryffindor`,
    loadChildren: () =>
      import('./core/components/houses/gryffindor/gryffindor.module').then(
        (m) => m.GryffindorModule
      ),
  },
  {
    path: `hufflepuff`,
    loadChildren: () =>
      import('./core/components/houses/hufflepuff/hufflepuff.module').then(
        (m) => m.HufflepuffModule
      ),
  },

  {
    path: `ravenclaw`,
    loadChildren: () =>
      import('./core/components/houses/revenclaw/revenclaw.module').then(
        (m) => m.RevenclawModule
      ),
  },

  {
    path: `slytherin`,
    loadChildren: () =>
      import('./core/components/houses/slytherin/slytherin.module').then(
        (m) => m.SlytherinModule
      ),
  },

  {
    path: `register`,
    loadChildren: () =>
      import('./core/components/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },

  {
    path: `students`,
    loadChildren: () =>
      import('./core/components/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },

  {
    path: `teachers`,
    loadChildren: () =>
      import('./core/components/teachers/teachers.module').then(
        (m) => m.TeachersModule
      ),
  },

  {
    path: `usuario-list`,
    loadChildren: () =>
      import('./core/components/usuario-list/usuario-list.module').then(
        (m) => m.UsuarioListModule
      ),
  },
  { path: ``, redirectTo: `home`, pathMatch: `full` },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
