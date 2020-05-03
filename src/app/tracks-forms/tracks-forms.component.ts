import { Component, OnInit, Inject } from "@angular/core";
import { trackService } from "../services/track.service";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

import { DialogTrackAddComponent } from "../dialog-track-add/dialog-track-add.component";

@Component({
  selector: "app-tracks-forms",
  templateUrl: "./tracks-forms.component.html",
  styleUrls: ["./tracks-forms.component.scss"],
})
export class TracksFormsComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public trackService: trackService, public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogTrackAddComponent, {
      width: "300px",
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log("The dialog was closed");
    //   this.animal = result;
    //   console.log(this.animal);
    // });
  }
  ngOnInit(): void {}
}
