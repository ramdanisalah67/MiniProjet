import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-sprint-message',
  templateUrl: './update-sprint-message.component.html',
  styleUrls: ['./update-sprint-message.component.css']
})
export class UpdateSprintMessageComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateSprintMessageComponent>,private router:Router
  ) {}
  
  
  closeDialog(): void {
    this.dialogRef.close(/* your result data here */);
    this.router.navigate(['projects'])
  }
}
