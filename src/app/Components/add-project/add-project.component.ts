import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from 'src/app/models/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddProjectMessageComponent } from '../add-project-message/add-project-message.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogConfig,
} from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

import { Sprint } from 'src/app/models/Sprint';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,FormsModule,
     MatFormFieldModule, MatInputModule,MatButtonModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

    project:Project
    myformbuilder:any
  
    errors:string
    message=""
    constructor(private dialog: MatDialog,private route:ActivatedRoute,private myService:ProjectService,private fb:FormBuilder,private router:Router
   
      ){ 
      this.myformbuilder = this.fb.group({
        Libelle:[''],
        Description:[''],
        DateDebut:[''],
        DateFin:[],
        SprintDays:[]
  
      })
    }
  
    ngOnInit(): void {
    
      
    }
  
  
    
addProject() {
      if(this.myformbuilder.valid) {
        this.message=""
      this.project = this.myformbuilder.value;
let mysprint: Sprint = new Sprint();
mysprint.Id = 4;
mysprint.SprintGoal = "goal goal!";
mysprint.SprintName = "salah";
mysprint.ProjetId = this.project.Id;

// Ensure that this.project.Sprints is initialized as an array
if (!this.project.Sprints) {
  this.project.Sprints = [];
}

this.project.Sprints.push(mysprint);
this.project.Id =Math.floor(Math.random() * 1000000);

console.log(this.project);

this.myService.addProject(this.project).subscribe(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
    this.errors = error;
    console.log(this.errors);
  }
);

if (this.project) this.openDialog();
      }
      else this.message="error"
    }
    
    openDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.width = '500px';
      dialogConfig.height = '170px';
      dialogConfig.data={message : 'welcome',id:this.project.Id}
      this.dialog.open(AddProjectMessageComponent,dialogConfig
      )
    }


    NoValidfForm(){
      if (this.myformbuilder.valid) return true 
      else return false
    }


    generateUniqueId(): string {
      return uuidv4();
    }
  }
  

