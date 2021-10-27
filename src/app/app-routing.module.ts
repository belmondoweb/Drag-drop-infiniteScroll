import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraDropComponent } from './dra-drop/dra-drop.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:GridComponent},
  {path:'grid', component:DraDropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
