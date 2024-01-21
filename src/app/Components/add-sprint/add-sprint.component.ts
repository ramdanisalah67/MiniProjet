import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { Project } from 'src/app/models/project';
import { AddSprintMessageComponent } from '../add-sprint-message/add-sprint-message.component';
import { Sprint } from 'src/app/models/Sprint';
import { SprintService } from 'src/app/Services/sprint.service';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.css']
})



export class AddSprintComponent implements OnInit {
  sprint:Sprint
  id:number 
  myformbuilder:any
  db:string
  df:string
 projects:Project[]
  message: string;
  constructor(private dialog: MatDialog,private route:ActivatedRoute,private projectService:ProjectService,
    private myService:SprintService,private projetService:ProjectService,private fb:FormBuilder,private router:Router
 
    ){ 
    this.myformbuilder = this.fb.group({
      SprintName:[''],
      SprintGoal:[''],
      DateDebut:[''],
      DateFin:[],
      
    

    })
    
 
    
  }
  
  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(data=>{this.projects=data})
  }

  addSprint(){
  

    if(this.myformbuilder.valid) {
      this.sprint.Id= Math.floor(Math.random() * 1000000);
      this.myService.addSprint(this.sprint).subscribe(data=>{})
      if( this.sprint) {
        this.openDialog()
      }
    }
    else this.message = "error"
      }
      openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '500px';
        dialogConfig.height = '170px';
        dialogConfig.data ={sprint:this.sprint,id:this.sprint.ProjetId}
        this.dialog.open(AddSprintMessageComponent,dialogConfig
        )
      }


      handleSelectionChange(event: MatSelectChange): void {
        this.sprint= this.myformbuilder.value
        const selectedProject: Project = event.value as Project;
        this.sprint.ProjetId=selectedProject.Id
        if (this.sprint.Projet) {
          this.sprint.Projet.Sprints = [];
        }
      }

     

}