import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { Sprint } from 'src/app/models/Sprint';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-add-sprint-message',
  templateUrl: './add-sprint-message.component.html',
  styleUrls: ['./add-sprint-message.component.css']
})
export class AddSprintMessageComponent implements OnInit {
  n:string
  project:Project
  sprint:Sprint
  sprints:Sprint[]=[]
  findSprint:Sprint
  id:number
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,private projectService:ProjectService,
    public dialogRef: MatDialogRef<AddSprintMessageComponent>,private router:Router
  ) {
    this.sprint=data.sprint
    this.id=data.id
    console.log(this.id)
    projectService.getById(this.id).subscribe(data=>{
      this.project=data 
      if(!this.project.Sprints) this.project.Sprints=[]
      else if(!this.project.Sprints.includes(this.sprint)){
        this.project.Sprints.push(this.sprint)
        console.log(this.project)
        projectService.updateProject(this.project.Id,this.project).subscribe(data=>{console.log(data)})
      }
    
    })

  }


  ngOnInit(): void {
   
  }
  
  
  closeDialog(): void {
    this.dialogRef.close(/* your result data here */);
    this.router.navigate(['sprints'])
  }
}
