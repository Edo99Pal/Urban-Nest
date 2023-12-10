import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-cancel-booking',
  templateUrl: './modal-cancel-booking.component.html',
  styleUrls: ['./modal-cancel-booking.component.scss']
})
export class ModalCancelBookingComponent {
  constructor(public dialogRef: MatDialogRef<ModalCancelBookingComponent>) {}
}
