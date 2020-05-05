import { Component, OnInit } from "@angular/core";
import { trackService } from "../services/track.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-dialog-track-add",
  templateUrl: "./dialog-track-add.component.html",
  styleUrls: ["./dialog-track-add.component.scss"],
})
export class DialogTrackAddComponent implements OnInit {
  form: FormGroup;

  constructor(public trackService: trackService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      latitude: new FormControl("", Validators.required),
      longitude: new FormControl("", Validators.required),
    });
  }
}
