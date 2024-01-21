import { SprintService } from './../../Services/sprint.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Sprint } from 'src/app/models/Sprint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sprints-info',
  templateUrl: './sprints-info.component.html',
  styleUrls: ['./sprints-info.component.css']
})
export class SprintsInfoComponent implements OnInit {
  sprints: Sprint[];
  displayedColumns: string[] = ['Id', 'sprintName', 'sprintGoal', 'dateDebut', 'dateFin', 'projectName','Actions'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private myService: SprintService,private route:Router) {}

  ngOnInit() {
    this.myService.getAllSprints().subscribe(data => {
      console.log(data);
      this.sprints = data;

      // Initialize dataSource here
      this.dataSource = new MatTableDataSource<Sprint>(this.sprints);
      
      // Set paginator after initializing dataSource
      this.dataSource.paginator = this.paginator;
    });
  }

  updateSprint(id:number){
    this.route.navigate(['updateSprint',id])
    console.log(this.sprints)

  }
  deleteSprint(id:number){
    this.myService.deleteSprint(id).subscribe((data)=>{console.log(data);this.ngOnInit()})

  }
}
