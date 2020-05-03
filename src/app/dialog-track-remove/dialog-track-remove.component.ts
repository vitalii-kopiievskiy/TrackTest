import { Component, OnInit, Inject } from "@angular/core";
import { trackService } from "../services/track.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
@Component({
  selector: "app-dialog-track-remove",
  templateUrl: "./dialog-track-remove.component.html",
  styleUrls: ["./dialog-track-remove.component.scss"],
})
export class DialogTrackRemoveComponent implements OnInit {
  constructor(public trackService: trackService, public dialog: MatDialog) {}

  openRemoveDialog(track) {
    const dialogRef = this.dialog.open(DialogTrackRemoveComponent, {
      width: "300px",
    });
    // this.removeTrack = track;
    console.log("track.name", track);
  }
  ngOnInit(): void {}
}
