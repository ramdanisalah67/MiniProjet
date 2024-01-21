import { Project } from 'src/app/models/project';
import { ProjectService } from './../../Services/project.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddSprintToProjectComponent } from '../add-sprint-to-project/add-sprint-to-project.component';

@Component({
  selector: 'app-projects-info',
  templateUrl: './projects-info.component.html',
  styleUrls: ['./projects-info.component.css']
})
export class ProjectsInfoComponent  implements OnInit{
  projects:Project[]
  displayedColumns: string[] = ['Id', 'Libelle','SprintDays', 'DateDebut', 'DateFin', 'Sprints','Actions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private myService:ProjectService,private route:Router,private dialog:MatDialog){

  }
  ngOnInit(): void {
    this.myService.getAllProjects().subscribe(
      data=>{
        this.projects=data
        console.log(data)
        this.dataSource = new MatTableDataSource<Project>(this.projects);
        this.dataSource.paginator = this.paginator;

      })

  }


  updateProject(id:number){
      this.route.navigate(['updateProject',id])
  }
  
  deleteProject(id:number){
    this.myService.deleteProject(id).subscribe((data)=>{console.log(data);this.ngOnInit()})
  }

  openDialog(p:Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '700px';
    dialogConfig.height = '400px';
    dialogConfig.data={message : 'welcome',prj : p}
    this.dialog.open(AddSprintToProjectComponent,dialogConfig
    )
  }
}
