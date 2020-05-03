import { Component, OnInit } from "@angular/core";
import { TrackService } from "../services/track.service";
@Component({
  selector: "app-tracks",
  templateUrl: "./tracks.component.html",
  styleUrls: ["./tracks.component.scss"],
})
export class TracksComponent implements OnInit {
  constructor(public trackService: TrackService) {}

  ngOnInit(): void {}
}