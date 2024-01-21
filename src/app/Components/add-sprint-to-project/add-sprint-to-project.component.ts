import { Project } from 'src/app/models/project';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { AddSprintMessageComponent } from '../add-sprint-message/add-sprint-message.component';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Sprint } from 'src/app/models/Sprint';
import { SprintService } from 'src/app/Services/sprint.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-add-sprint-to-project',
  templateUrl: './add-sprint-to-project.component.html',
  styleUrls: ['./add-sprint-to-project.component.css']
})
export class AddSprintToProjectComponent implements OnInit {
  n:string
  id:number
  project:Project

  sprints: Sprint[];
  displayedColumns: string[] = ['sprintName','dateDebut', 'dateFin','Actions'];
  dataSource: any;
  newSprints:Sprint[]=[]
  infoProject:Project
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddSprintToProjectComponent>,private router:Router,
    private myService: SprintService,private projectService:ProjectService
  ) {
    this.id=data.id
    this.newSprints = [];

    if(data.prj){
      this.id=data.prj.Id
      this.infoProject =data.prj 
      this.newSprints = this.infoProject.Sprints || [];
    }
  }
  
  
 


  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.projectService.getById(this.id).subscribe(data=>{this.project=data})
    this.myService.getAllSprints().subscribe(data => {
      console.log(data);
      this.sprints = data;

      // Initialize dataSource here
      this.dataSource = new MatTableDataSource<Sprint>(this.sprints);
      
      // Set paginator after initializing dataSource
      this.dataSource.paginator = this.paginator;
    });
  }

  

  addSprintToProject(s:Sprint){
    this.newSprints.push(s)
    console.log(this.newSprints)
  }

  AlreadyExist(s:Sprint) :boolean {
    const sprintArray = Array.isArray(this.newSprints) ? this.newSprints : [];
    const foundObject = sprintArray.find(obj => obj.Id === s.Id);
    return !!foundObject;
  }

  finishProcess(){
    this.project.Sprints=this.newSprints
    this.projectService.updateProject(this.id,this.project).subscribe(data=>{console.log(data)})
    this.closeDialog()
    this.router.navigate(['projects'])
  }
  removeSprintFromProject(s:Sprint){
    this.newSprints = this.newSprints.filter(e => e.Id !== s.Id);

  }
  
  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['sprints'])
  }
}
