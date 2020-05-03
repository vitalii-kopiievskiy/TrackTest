import { Component, OnInit, Inject } from "@angular/core";
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
  selector: "app-dialog-track-add",
  templateUrl: "./dialog-track-add.component.html",
  styleUrls: ["./dialog-track-add.component.scss"],
})
export class DialogTrackAddComponent {
  constructor() {}
}
