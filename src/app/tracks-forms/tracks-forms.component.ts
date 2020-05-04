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
  constructor(public trackService: trackService, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogTrackAddComponent, {
      width: "320px",
    });
  }
  ngOnInit(): void {}
}
