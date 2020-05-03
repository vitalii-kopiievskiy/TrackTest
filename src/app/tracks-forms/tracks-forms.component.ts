import { Component, OnInit } from "@angular/core";
import { TrackService } from "../services/track.service";
import { DialogAddTracksComponent } from "../dialog-add-tracks/dialog-add-tracks.component";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "app-tracks-forms",
  templateUrl: "./tracks-forms.component.html",
  styleUrls: ["./tracks-forms.component.scss"],
})
export class TracksFormsComponent implements OnInit {
  constructor(public trackService: TrackService, public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogAddTracksComponent);
  }
  ngOnInit(): void {}
}
