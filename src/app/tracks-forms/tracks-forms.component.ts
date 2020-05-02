import { Component, OnInit } from "@angular/core";
import { TrackService } from "../services/track.service";

@Component({
  selector: "app-tracks-forms",
  templateUrl: "./tracks-forms.component.html",
  styleUrls: ["./tracks-forms.component.scss"],
})
export class TracksFormsComponent implements OnInit {
  constructor(public trackService: TrackService) {}

  ngOnInit(): void {}
}
