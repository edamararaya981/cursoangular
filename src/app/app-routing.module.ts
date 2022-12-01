import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadosComponent } from './components/crear-empleados/crear-empleados.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';

const routes: Routes = [
  {path: '',redirectTo:'lista', pathMatch:'full'},
  {path: 'lista', component: ListaEmpleadosComponent},
  {path: 'crear', component: CrearEmpleadosComponent},
  {path: 'editar/:id', component: CrearEmpleadosComponent},
  {path:'**',redirectTo:'lista', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
