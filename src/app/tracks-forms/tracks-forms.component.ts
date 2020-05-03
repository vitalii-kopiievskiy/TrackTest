import { Component, OnInit, Inject } from "@angular/core";
import { TrackService } from "../services/track.service";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: "app-tracks-forms",
  templateUrl: "./tracks-forms.component.html",
  styleUrls: ["./tracks-forms.component.scss"],
})
export class TracksFormsComponent implements OnInit {
  constructor(public trackService: TrackService, public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogAddTrack);
  }
  ngOnInit(): void {}
}

@Component({
  selector: "dialog-overview-example-dialog",
  templateUrl: "dialog.add.track.component.html",
})
export class DialogAddTrack {
  constructor(
    public dialogRef: MatDialogRef<DialogAddTrack>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
