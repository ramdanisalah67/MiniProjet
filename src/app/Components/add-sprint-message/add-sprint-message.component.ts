import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sprint-message',
  templateUrl: './add-sprint-message.component.html',
  styleUrls: ['./add-sprint-message.component.css']
})
export class AddSprintMessageComponent {
  n:string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddSprintMessageComponent>,private router:Router
  ) {}
  
  
  closeDialog(): void {
    this.dialogRef.close(/* your result data here */);
    this.router.navigate(['sprints'])
  }
}
