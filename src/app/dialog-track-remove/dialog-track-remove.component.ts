import { Component, OnInit } from "@angular/core";
import { trackService } from "../services/track.service";

@Component({
  selector: "app-dialog-track-remove",
  templateUrl: "./dialog-track-remove.component.html",
  styleUrls: ["./dialog-track-remove.component.scss"],
})
export class DialogTrackRemoveComponent implements OnInit {
  constructor(public trackService: trackService) {}

  ngOnInit(): void {}
}
