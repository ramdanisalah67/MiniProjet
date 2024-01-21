import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/project.service';
import { Project } from 'src/app/models/project';
import { MyDatePipe } from 'src/app/my-date.pipe';
import { UpdateProjectMessageComponent } from '../update-project-message/update-project-message.component';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  project:Project 
  id:number 
  myformbuilder:any
  db:string
  df:string
  constructor(private dialog: MatDialog,private route:ActivatedRoute,private myService:ProjectService,private fb:FormBuilder,private router:Router){ 
    this.myformbuilder = this.fb.group({
      Libelle:[''],
      Description:[''],
      DateDebut:[''],
      DateFin:[],
      SprintDays:[]

    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id=params['id'] ;
    });
    this.myService.getById(this.id).subscribe(data=>{
       this.project = data;
       if(this.project !=null &&  this.project.DateDebut){
        this.transDate()
       if( this.db && this.df){ this.myformbuilder.patchValue({
          Libelle: this.project.Libelle,
          Description:this.project.Description,
          SprintDays : this.project.SprintDays,
          DateDebut:this.db ,
          DateFin:this.df
    
          // ... other fields
        });
      } 
  }})
  
    }


  transDate(){
    this.project.DateDebut = new Date(this.project.DateDebut);
    this.project.DateFin = new Date(this.project.DateFin);
    this.db = this.project.DateDebut.getFullYear()+'-0'+(this.project.DateDebut.getMonth()+1) 
    if(this.project.DateDebut.getDate()<10) this.db+= '-0'+this.project.DateDebut.getDate()
    else this.db+= '-'+this.project.DateDebut.getDate()
    this.df = this.project.DateFin.getFullYear()+'-0'+(this.project.DateFin.getMonth()+1) 
    if(this.project.DateFin.getDate()<10) this.df+= '-0'+this.project.DateFin.getDate()
    else this.df+= '-'+this.project.DateFin.getDate()

  }


  
  
  updateProject() {
    this.project = this.myformbuilder.value
    this.project.Id=this.id
    console.log(this.project)
    this.myService.updateProject(this.project.Id,this.project).subscribe(
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
    this.dialog.open(UpdateProjectMessageComponent,dialogConfig
    )
  }

}
