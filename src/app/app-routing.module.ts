import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CamionsComponent } from './camions/camions.component';
import { AddCamionComponent } from './add-camion/add-camion.component';
import { UpdateCamionComponent } from './update-camion/update-camion.component';


const routes: Routes = [
{path: "camions", component : CamionsComponent},
{path: "add-camion", component : AddCamionComponent},
{path: "updateCamion/:id", component: UpdateCamionComponent},
{ path: "", redirectTo: "camions", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
