import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { ProjectsInfoComponent } from './Components/projects-info/projects-info.component';
import { UpdateProjectComponent } from './Components/update-project/update-project.component';
import { TestComponent } from './Components/test/test.component';
import { AddProjectComponent } from './Components/add-project/add-project.component';
import { SprintsInfoComponent } from './Components/sprints-info/sprints-info.component';
import { AddSprintComponent } from './Components/add-sprint/add-sprint.component';
import { UpdateSprintComponent } from './Components/update-sprint/update-sprint.component';
import { HomeComponent } from './Components/home/home.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'projects',component:ProjectsInfoComponent},
  {path:'updateProject/:id',component:UpdateProjectComponent},
  {path:'addProject',component:AddProjectComponent},
  {path:'sprints',component:SprintsInfoComponent},
  {path:'addSprint',component:AddSprintComponent},
  {path:'updateSprint/:id',component:UpdateSprintComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
