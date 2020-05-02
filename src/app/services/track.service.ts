import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TrackService {
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  constructor() {}
}
