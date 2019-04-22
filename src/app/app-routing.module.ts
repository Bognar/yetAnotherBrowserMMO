import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuildingsComponent } from './buildings/buildings.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'buildings', component: BuildingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
