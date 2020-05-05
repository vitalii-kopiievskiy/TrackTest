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
      latitude: new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^[+-]?(([1-8]?[0-9])(\.[0-9]{1,6})?|90(\.0{1,6})?)$/
        ),
      ]),
      longitude: new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^[+-]?((([1-9]?[0-9]|1[0-7][0-9])(\.[0-9]{1,6})?)|180(\.0{1,6})?)$/
        ),
      ]),
    });
  }
}
