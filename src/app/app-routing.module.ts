import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './components/pages/curso/curso.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListComponent } from './components/pages/list/list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
