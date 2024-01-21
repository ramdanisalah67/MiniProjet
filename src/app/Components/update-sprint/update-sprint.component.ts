import { SprintService } from 'src/app/Services/sprint.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { Sprint } from 'src/app/models/Sprint';
import { UpdateSprintMessageComponent } from '../update-sprint-message/update-sprint-message.component';
import { MatSelectChange } from '@angular/material/select';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-update-sprint',
  templateUrl: './update-sprint.component.html',
  styleUrls: ['./update-sprint.component.css']
})
export class UpdateSprintComponent   implements OnInit {
  sprint:Sprint 
  id:number 
  myformbuilder:any
  db:string
  df:string
  projects: Project[];
  myProject:Project
  selected:Project
  constructor(private dialog: MatDialog,private route:ActivatedRoute,private myService:ProjectService,
    private fb:FormBuilder,private router:Router,private sprintService:SprintService){ 
    this.myformbuilder = this.fb.group({
      SprintName:[''],
      SprintGoal:[''],
      DateDebut:[''],
      DateFin:[],

    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'] ;
    });
    console.log(this.id)
    this.sprintService.getById(this.id).subscribe(data=>{
       this.sprint = data;
       this.myProject =this.sprint.Projet
       this.selected=this.myProject
       console.log(this.myProject)
       if(this.sprint !=null &&  this.sprint.DateDebut){
        this.myService.getAllProjects().subscribe(er=>{this.projects=er})
        this.transDate()
       if( this.db && this.df){ this.myformbuilder.patchValue({        
          SprintName: this.sprint.SprintName,
          SprintGoal:this.sprint.SprintGoal,
          DateDebut:this.db ,
          DateFin:this.df,
          selectedProject: this.sprint.Projet.Libelle, // Set the default value for mat-select

        });
      } 
  }})
  
    }


  transDate(){
    this.sprint.DateDebut = new Date(this.sprint.DateDebut);
    this.sprint.DateFin = new Date(this.sprint.DateFin);
    this.db = this.sprint.DateDebut.getFullYear()+'-0'+(this.sprint.DateDebut.getMonth()+1) 
    if(this.sprint.DateDebut.getDate()<10) this.db+= '-0'+this.sprint.DateDebut.getDate()
    else this.db+= '-'+this.sprint.DateDebut.getDate()
    this.df = this.sprint.DateFin.getFullYear()+'-0'+(this.sprint.DateFin.getMonth()+1) 
    if(this.sprint.DateFin.getDate()<10) this.df+= '-0'+this.sprint.DateFin.getDate()
    else this.df+= '-'+this.sprint.DateFin.getDate()

  }


  
  
  updateSprint() {
    this.sprint = this.myformbuilder.value
    this.sprint.Id=this.id
    console.log(this.sprint)

    this.sprintService.updateSprint(this.sprint.Id,this.sprint).subscribe(
      data=>{
        console.log(data)
        this.openDialog()
      }
      )
  }
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '170px';
    this.dialog.open(UpdateSprintMessageComponent,dialogConfig
    )
  }
  

  handleSelectionChange(event: MatSelectChange): void {
    this.sprint= this.myformbuilder.value
    const selectedProject: Project = event.value as Project;
    this.sprint.ProjetId=selectedProject.Id
    this.sprint.Projet=selectedProject
    this.sprint.Projet.Sprints=[]
  }
}
