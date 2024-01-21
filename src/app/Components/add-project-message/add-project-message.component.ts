import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddSprintToProjectComponent } from '../add-sprint-to-project/add-sprint-to-project.component';

@Component({
  selector: 'app-add-project-message',
  templateUrl: './add-project-message.component.html',
  styleUrls: ['./add-project-message.component.css']
})
export class AddProjectMessageComponent implements OnInit {
n:string
id :number
constructor(private dialog: MatDialog,
  @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<AddProjectMessageComponent>,private router:Router
) {
  this.id=data.id 
  console.log(this.id)
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


closeDialog(): void {
  this.dialogRef.close(/* your result data here */);
  this.router.navigate(['projects'])
}

addSprintToProject(){
this.openDialog()
}

openDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.width = '700px';
  dialogConfig.height = '500px';
  dialogConfig.data={message : 'welcome',id:this.id}
  this.dialog.open(AddSprintToProjectComponent,dialogConfig
  )
}
}
