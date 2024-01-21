import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddProjectMessageComponent } from '../add-project-message/add-project-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-project-message',
  templateUrl: './update-project-message.component.html',
  styleUrls: ['./update-project-message.component.css']
})
export class UpdateProjectMessageComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateProjectMessageComponent>,private router:Router
  ) {}
  
  
  closeDialog(): void {
    this.dialogRef.close(/* your result data here */);
    this.router.navigate(['projects'])
  }
}
