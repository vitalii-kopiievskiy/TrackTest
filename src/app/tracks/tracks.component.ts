import { Component, OnInit } from "@angular/core";
import { trackService } from "../services/track.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { DialogTrackRemoveComponent } from "../dialog-track-remove/dialog-track-remove.component";

@Component({
  selector: "app-tracks",
  templateUrl: "./tracks.component.html",
  styleUrls: ["./tracks.component.scss"],
})
export class TracksComponent implements OnInit {
  constructor(public trackService: trackService, public dialog: MatDialog) {}

  openRemoveDialog(track) {
    const dialogRef = this.dialog.open(DialogTrackRemoveComponent, {
      width: "300px",
    });
    console.log(track.name);

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log("The dialog was closed");
    //   this.animal = result;
    //   console.log(this.animal);
    // });
  }
  ngOnInit(): void {}
}
