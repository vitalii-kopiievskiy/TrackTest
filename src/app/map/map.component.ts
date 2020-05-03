import { Component, OnInit } from "@angular/core";
import { trackService } from "../services/track.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  constructor(public trackService: trackService) {}

  ngOnInit(): void {}
}
