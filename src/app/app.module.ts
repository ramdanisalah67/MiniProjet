import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';

import {MatPaginatorModule} from '@angular/material/paginator';
import { SprintsInfoComponent } from './Components/sprints-info/sprints-info.component';
import { ProjectsInfoComponent } from './Components/projects-info/projects-info.component';
import { AddProjectComponent } from './Components/add-project/add-project.component';
import { UpdateProjectComponent } from './Components/update-project/update-project.component';
import { MyDatePipe } from './my-date.pipe';
import { TestComponent } from './Components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddProjectMessageComponent } from './Components/add-project-message/add-project-message.component';
import { UpdateProjectMessageComponent } from './Components/update-project-message/update-project-message.component';
import { AddSprintComponent } from './Components/add-sprint/add-sprint.component';
import { MatTableModule } from '@angular/material/table';
import { AddSprintMessageComponent } from './Components/add-sprint-message/add-sprint-message.component';
import { UpdateSprintMessageComponent } from './Components/update-sprint-message/update-sprint-message.component';
import { UpdateSprintComponent } from './Components/update-sprint/update-sprint.component';
import { AddSprintToProjectComponent } from './Components/add-sprint-to-project/add-sprint-to-project.component';
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SprintsInfoComponent,
    ProjectsInfoComponent,
    UpdateProjectComponent,
    MyDatePipe,
    TestComponent,
    AddProjectMessageComponent,
    UpdateProjectMessageComponent,
    AddSprintComponent,
    AddSprintMessageComponent,
    UpdateSprintComponent,
    UpdateSprintMessageComponent,
    AddSprintToProjectComponent,
    HomeComponent,
    ContactComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),    
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
